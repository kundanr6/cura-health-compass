
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
      />
      <main className="flex-1 pt-24 px-4">
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="lead">
              By using Cura, you agree to the following terms and conditions, which together with our Privacy Policy, govern your use of the Cura service.
            </p>
            
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using Cura, you agree to be bound by these Terms of Use. If you do not agree to all these terms, you may not use this service.
            </p>
            
            <h2>Description of Service</h2>
            <p>
              Cura is an AI-powered service that provides health information and guidance based on user-described symptoms. The service is intended for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            
            <h2>Medical Disclaimer</h2>
            <p>
              Cura does not provide medical advice, diagnosis, or treatment. The content provided by Cura is for informational purposes only. 
              Never disregard professional medical advice or delay in seeking it because of something you have read on Cura.
            </p>
            
            <h2>User Responsibilities</h2>
            <p>
              As a user of Cura, you agree:
            </p>
            <ul>
              <li>To provide accurate information about your symptoms and health concerns</li>
              <li>Not to use the service for emergency medical situations</li>
              <li>To consult with qualified healthcare professionals for medical advice</li>
              <li>Not to misuse or attempt to circumvent the intended functionality of the service</li>
              <li>Not to use the service for any unlawful purpose</li>
            </ul>
            
            <h2>Intellectual Property</h2>
            <p>
              All content and functionality on Cura, including text, graphics, logos, and software, is the property of Cura Health or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Cura Health and its affiliates, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use of the service.
            </p>
            
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. We will notify users of significant changes by posting a notice on our website or by sending an email.
            </p>
            
            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to Cura immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Use.
            </p>
            
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Cura Health operates, without regard to its conflict of law provisions.
            </p>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
              Last Updated: April 6, 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
