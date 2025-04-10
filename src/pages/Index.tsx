
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20 md:pt-24">
        <Hero />
        <Features />
        <HowItWorks />
        <div className="max-w-3xl mx-auto px-4 py-6 md:py-8">
          <MedicalDisclaimer />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
