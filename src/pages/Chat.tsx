
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatInput from '@/components/chat/ChatInput';
import TypingIndicator from '@/components/chat/TypingIndicator';
import { Message } from '@/types/chat';
import { generateId, getWelcomeMessage, analyzeSymptoms, formatHealthAnalysis } from '@/utils/chatHelpers';
import { useToast } from '@/components/ui/use-toast';

const Chat = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Initialize chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([getWelcomeMessage(currentLanguage)]);
    }
  }, [currentLanguage, messages.length]);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);
    
    try {
      // Analyze symptoms
      const analysis = await analyzeSymptoms(content);
      
      // Check for emergency
      if (analysis.emergencyLevel === 'high') {
        toast({
          title: "⚠️ Emergency Warning",
          description: analysis.emergencyMessage || "Your symptoms may require immediate medical attention.",
          variant: "destructive",
        });
      }
      
      // Format response
      const responseContent = formatHealthAnalysis(analysis);
      
      // Add assistant response
      const assistantMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: responseContent,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error analyzing symptoms:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: "I'm sorry, I encountered an error analyzing your symptoms. Please try again or describe your symptoms differently.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Error",
        description: "There was a problem analyzing your symptoms. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!disclaimerAccepted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header
          currentLanguage={currentLanguage}
          onLanguageChange={setCurrentLanguage}
        />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-2">Before We Begin</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Please read and accept our medical disclaimer before using Cura's health AI assistant.
              </p>
            </div>
            <MedicalDisclaimer showAsDialog={false} />
            <div className="mt-6 text-center">
              <button
                onClick={() => setDisclaimerAccepted(true)}
                className="bg-cura-primary text-white px-6 py-2 rounded-md font-medium hover:bg-cura-primary/90 transition-colors"
              >
                I Understand and Accept
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />
      <main className="flex-1 flex flex-col pt-24">
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="max-w-4xl mx-auto pt-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isProcessing && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <ChatInput 
          onSendMessage={handleSendMessage} 
          isProcessing={isProcessing}
          placeholder={currentLanguage === 'en' 
            ? "Describe your symptoms or health concerns..."
            : "अपने लक्षणों या स्वास्थ्य चिंताओं का वर्णन करें..." // Hindi placeholder
          }
        />
      </main>
      <Footer />
    </div>
  );
};

export default Chat;
