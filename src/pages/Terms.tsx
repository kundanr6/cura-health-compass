
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Shield, AlertTriangle } from 'lucide-react';

const Terms = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col"
    >
      <Header />
      <motion.main
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 pt-24 px-4"
      >
        <div className="max-w-4xl mx-auto py-12">
          <div className="flex items-center justify-center mb-8">
            <FileText className="h-10 w-10 text-cura-primary mr-4" />
            <h1 className="text-4xl font-bold text-cura-dark dark:text-white">Terms of Use</h1>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-10 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
              By using Cura, you agree to the following terms and conditions, which together with our Privacy Policy, govern your use of the Cura service.
            </p>
            
            <motion.div 
              className="space-y-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              <motion.section 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-4 text-cura-primary flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Acceptance of Terms
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  By accessing or using Cura, you agree to be bound by these Terms of Use. If you do not agree to all these terms, you may not use this service.
                </p>
              </motion.section>
              
              <motion.section 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-4 text-cura-primary flex items-center">
                  <FileText className="h-6 w-6 mr-2" />
                  Description of Service
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Cura is an AI-powered service that provides health information and guidance based on user-described symptoms. The service is intended for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
              </motion.section>
              
              <motion.section 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-4 text-cura-warning flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Medical Disclaimer
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Cura does not provide medical advice, diagnosis, or treatment. The content provided by Cura is for informational purposes only. 
                  Never disregard professional medical advice or delay in seeking it because of something you have read on Cura.
                </p>
              </motion.section>
              
              <motion.section 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-4 text-cura-primary flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  User Responsibilities
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  As a user of Cura, you agree:
                </p>
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">To provide accurate information about your symptoms and health concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Not to use the service for emergency medical situations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">To consult with qualified healthcare professionals for medical advice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Not to misuse or attempt to circumvent the intended functionality of the service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Not to use the service for any unlawful purpose</span>
                  </li>
                </ul>
              </motion.section>
              
              <motion.section 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-4 text-cura-primary flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  Intellectual Property
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  All content and functionality on Cura, including text, graphics, logos, and software, is the property of Cura Health or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>
              </motion.section>
              
              <motion.section 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-4 text-cura-secondary flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Limitation of Liability
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  To the fullest extent permitted by law, Cura Health and its affiliates, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use of the service.
                </p>
              </motion.section>
            </motion.div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-10 text-center">
              Last Updated: April 6, 2025
            </p>
          </div>
        </div>
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default Terms;
