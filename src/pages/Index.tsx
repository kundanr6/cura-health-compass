
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col overflow-hidden"
    >
      <Header />
      <main className="flex-1 pt-16 sm:pt-20 md:pt-24">
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
