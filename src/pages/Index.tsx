
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Prevent direct access to chat from any other entry point
  useEffect(() => {
    const handleChatAccess = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const chatLink = target.closest('a[href="/chat"]');
      
      if (chatLink && !currentUser) {
        e.preventDefault();
        navigate('/auth');
      }
    };

    document.addEventListener('click', handleChatAccess);
    
    return () => {
      document.removeEventListener('click', handleChatAccess);
    };
  }, [currentUser, navigate]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col overflow-hidden w-full"
    >
      <Header />
      <main className="flex-1 pt-16 sm:pt-20 md:pt-24 overflow-x-hidden">
        <Hero />
        <div className="bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/30 h-10 sm:h-16"></div>
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
