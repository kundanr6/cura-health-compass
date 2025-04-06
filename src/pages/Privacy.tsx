
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
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
            <Shield className="h-10 w-10 text-cura-primary mr-4" />
            <h1 className="text-4xl font-bold text-cura-dark dark:text-white">Privacy Policy</h1>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-10 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
              At Cura, we take your privacy very seriously. This Privacy Policy explains how we collect, use, and protect your information.
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
                  <FileText className="h-6 w-6 mr-2" />
                  Information We Collect
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  When you use Cura, we collect the following information:
                </p>
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">The symptoms and health concerns you describe in conversations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Language preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Basic usage data such as time and frequency of interactions</span>
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
                  <Eye className="h-6 w-6 mr-2" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  The information you provide is used to:
                </p>
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Analyze your symptoms and provide relevant health information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Improve the accuracy and effectiveness of our AI system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Enhance the user experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Ensure the security and reliability of our service</span>
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
                  <Lock className="h-6 w-6 mr-2" />
                  Data Storage and Protection
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  Your health information is treated with the utmost care:
                </p>
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Conversations are stored securely using industry-standard encryption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">We implement robust technical measures to protect against unauthorized access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">We limit access to personal information to authorized personnel only</span>
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
                <h2 className="text-2xl font-semibold mb-4 text-cura-secondary flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  No Data Selling or Sharing
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  We do not sell, rent, or lease your personal information to third parties. Your health data is not shared with advertisers or marketing companies.
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
                  Your Rights
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Access your personal information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Correct inaccurate or incomplete information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Delete your data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Object to or restrict certain processing activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Data portability</span>
                  </li>
                </ul>
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

export default Privacy;
