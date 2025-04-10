import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [emergencyAlert, setEmergencyAlert] = useState({
    isOpen: false,
    message: ''
  });
  const [activeChatSessionId, setActiveChatSessionId] = useState<string | null>(sessionId);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [hasAuthenticated, setHasAuthenticated] = useState(false);

  useEffect(() => {
    const fromAuth = sessionStorage.getItem('fromAuth') === 'true';
    
    if (!currentUser && !fromAuth) {
      navigate('/auth');
    } else {
      setHasAuthenticated(true);
      if (fromAuth) {
        sessionStorage.removeItem('fromAuth');
      }
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (!hasAuthenticated) return;
    
    const initChat = async () => {
      if (sessionId) {
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
        setMessages([getWelcomeMessage('en')]);
      }
    };

    initChat();
  }, [sessionId, toast, hasAuthenticated]);

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
      if (currentUser && !activeChatSessionId) {
        const newSessionId = await createChatSession(
          currentUser.uid, 
          content.length > 30 ? content.substring(0, 30) + '...' : content
        );
        
        if (newSessionId) {
          setActiveChatSessionId(newSessionId);
        }
      }
      
      if (currentUser && activeChatSessionId) {
        await saveMessage(currentUser.uid, activeChatSessionId, userMessage);
      }
      
      const analysis = await analyzeSymptoms(content);
      
      if (analysis.emergencyLevel === 'high') {
        setEmergencyAlert({
          isOpen: true,
          message: analysis.emergencyMessage || "Your symptoms may indicate a serious condition. Please consult a medical professional immediately."
        });
      }
      
      const responseContent = formatHealthAnalysis(analysis);
      
      setTimeout(() => {
        const assistantMessage: Message = {
          id: generateId(),
          role: 'assistant',
          content: responseContent,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        
        if (currentUser && activeChatSessionId) {
          saveMessage(currentUser.uid, activeChatSessionId, assistantMessage);
        }
        
        setIsProcessing(false);
      }, 1000);
    } catch (error) {
      console.error('Error analyzing symptoms:', error);
      
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

  const handleCloseEmergencyAlert = () => {
    setEmergencyAlert({ isOpen: false, message: '' });
  };

  if (!hasAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col pt-24">
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="max-w-4xl mx-auto pt-4 px-4">
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
