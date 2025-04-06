
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
      />
      <main className="flex-1 pt-24 px-4">
        <div className="max-w-4xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="lead">
              At Cura, we take your privacy very seriously. This Privacy Policy explains how we collect, use, and protect your information.
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              When you use Cura, we collect the following information:
            </p>
            <ul>
              <li>The symptoms and health concerns you describe in conversations</li>
              <li>Language preferences</li>
              <li>Basic usage data such as time and frequency of interactions</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>
              The information you provide is used to:
            </p>
            <ul>
              <li>Analyze your symptoms and provide relevant health information</li>
              <li>Improve the accuracy and effectiveness of our AI system</li>
              <li>Enhance the user experience</li>
              <li>Ensure the security and reliability of our service</li>
            </ul>
            
            <h2>Data Storage and Protection</h2>
            <p>
              Your health information is treated with the utmost care:
            </p>
            <ul>
              <li>Conversations are stored securely using industry-standard encryption</li>
              <li>We implement robust technical measures to protect against unauthorized access</li>
              <li>We limit access to personal information to authorized personnel only</li>
            </ul>
            
            <h2>No Data Selling or Sharing</h2>
            <p>
              We do not sell, rent, or lease your personal information to third parties. Your health data is not shared with advertisers or marketing companies.
            </p>
            
            <h2>Data Retention</h2>
            <p>
              We retain your conversation history only as long as necessary to provide you with the service and comply with legal obligations. 
              You may request deletion of your conversation history at any time.
            </p>
            
            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your data</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability</li>
            </ul>
            
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
              and updating the "Last Updated" date.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@cura-health.com.
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

export default Privacy;
