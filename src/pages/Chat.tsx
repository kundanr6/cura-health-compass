
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatInput from '@/components/chat/ChatInput';
import TypingIndicator from '@/components/chat/TypingIndicator';
import EmergencyAlert from '@/components/chat/EmergencyAlert';
import { Message } from '@/types/chat';
import { generateId, getWelcomeMessage, analyzeSymptoms, formatHealthAnalysis } from '@/utils/chatHelpers';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { 
  createChatSession, 
  saveMessage, 
  getSessionMessages 
} from '@/services/chatService';

const Chat = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('sessionId');
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [emergencyAlert, setEmergencyAlert] = useState({
    isOpen: false,
    message: ''
  });
  const [templateMessage, setTemplateMessage] = useState(
    "Hi! I'm not feeling well. My symptoms are: [fever], [sore throat], and [fatigue]. It started [2 days ago] and feels [moderate]. What could it be?"
  );
  const [activeChatSessionId, setActiveChatSessionId] = useState<string | null>(sessionId);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);

  // Initialize chat with welcome message or load existing chat
  useEffect(() => {
    const initChat = async () => {
      if (sessionId) {
        // Load existing chat session
        setIsLoadingHistory(true);
        try {
          const chatMessages = await getSessionMessages(sessionId);
          if (chatMessages.length > 0) {
            setMessages(chatMessages);
            setActiveChatSessionId(sessionId);
          } else {
            setMessages([getWelcomeMessage('en')]);
          }
        } catch (error) {
          console.error('Error loading chat history:', error);
          toast({
            title: "Error",
            description: "Failed to load chat history",
            variant: "destructive",
          });
          setMessages([getWelcomeMessage('en')]);
        } finally {
          setIsLoadingHistory(false);
        }
      } else if (messages.length === 0) {
        // New chat session
        setMessages([getWelcomeMessage('en')]);
      }
    };

    initChat();
  }, [sessionId, toast]);

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
    
    // Check for emergency keywords
    const emergencyKeywords = [
      'chest pain', 'can\'t breathe', 'difficulty breathing', 'unconscious', 
      'fainted', 'stroke', 'heart attack', 'bleeding heavily', 'suicide', 
      'worst headache', 'paralysis', 'seizure', 'overdose', 'poisoning'
    ];
    
    const contentLower = content.toLowerCase();
    const detectedEmergency = emergencyKeywords.some(keyword => contentLower.includes(keyword));
    
    if (detectedEmergency) {
      setEmergencyAlert({
        isOpen: true,
        message: "Your symptoms may indicate a serious condition requiring immediate medical attention. Please consult a healthcare professional or emergency services right away."
      });
    }
    
    try {
      // Create a new chat session if needed (for logged-in users)
      if (currentUser && !activeChatSessionId) {
        const newSessionId = await createChatSession(
          currentUser.uid, 
          content.length > 30 ? content.substring(0, 30) + '...' : content
        );
        
        if (newSessionId) {
          setActiveChatSessionId(newSessionId);
        }
      }
      
      // Save user message (for logged-in users)
      if (currentUser && activeChatSessionId) {
        await saveMessage(currentUser.uid, activeChatSessionId, userMessage);
      }
      
      // Analyze symptoms
      const analysis = await analyzeSymptoms(content);
      
      // Check for emergency from analysis
      if (analysis.emergencyLevel === 'high') {
        setEmergencyAlert({
          isOpen: true,
          message: analysis.emergencyMessage || "Your symptoms may indicate a serious condition. Please consult a medical professional immediately."
        });
      }
      
      // Format response
      const responseContent = formatHealthAnalysis(analysis);
      
      // Add assistant response with animation delay
      setTimeout(() => {
        const assistantMessage: Message = {
          id: generateId(),
          role: 'assistant',
          content: responseContent,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        
        // Save assistant message (for logged-in users)
        if (currentUser && activeChatSessionId) {
          saveMessage(currentUser.uid, activeChatSessionId, assistantMessage);
        }
        
        setIsProcessing(false);
      }, 1000); // Delay to simulate thinking
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
      setIsProcessing(false);
    }
  };

  const handleUseTemplate = () => {
    handleSendMessage(templateMessage);
  };

  const handleCloseEmergencyAlert = () => {
    setEmergencyAlert({ isOpen: false, message: '' });
  };

  if (!disclaimerAccepted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-1 flex items-center justify-center p-4"
        >
          <div className="max-w-md w-full">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-2">Before We Begin</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Please read and accept our medical disclaimer before using Cura's health AI assistant.
              </p>
            </div>
            <MedicalDisclaimer showAsDialog={false} />
            <div className="mt-6 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDisclaimerAccepted(true)}
                className="bg-cura-primary text-white px-6 py-2 rounded-md font-medium hover:bg-cura-primary/90 transition-colors"
              >
                I Understand and Accept
              </motion.button>
            </div>
          </div>
        </motion.main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col pt-24">
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="max-w-4xl mx-auto pt-4 px-4">
            {messages.length === 1 && !isLoadingHistory && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700"
              >
                <h3 className="font-medium mb-2">Example message format:</h3>
                <p className="text-slate-600 dark:text-slate-400">{templateMessage}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleUseTemplate}
                  className="mt-3 text-sm text-cura-primary hover:underline"
                >
                  Use this template
                </motion.button>
              </motion.div>
            )}
            {isLoadingHistory ? (
              <div className="flex justify-center py-8">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="h-2.5 bg-slate-200 rounded-full dark:bg-slate-700 w-48 mb-4"></div>
                  <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 w-32 mb-2.5"></div>
                </div>
              </div>
            ) : (
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChatMessage message={message} />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
            {isProcessing && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <ChatInput 
          onSendMessage={handleSendMessage} 
          isProcessing={isProcessing}
          placeholder="Describe your symptoms or health concerns..."
        />
      </main>
      <EmergencyAlert 
        isOpen={emergencyAlert.isOpen} 
        message={emergencyAlert.message}
        onClose={handleCloseEmergencyAlert}
      />
      <Footer />
    </div>
  );
};

export default Chat;
