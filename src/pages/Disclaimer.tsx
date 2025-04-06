
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { AlertTriangle, Info } from 'lucide-react';

const Disclaimer = () => {
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
            <AlertTriangle className="h-10 w-10 text-cura-warning mr-4" />
            <h1 className="text-4xl font-bold text-cura-dark dark:text-white">Medical Disclaimer</h1>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <div className="p-6 border-l-4 border-cura-warning rounded-md bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200 mb-10 shadow-md">
              <p className="font-bold text-xl mb-2">Important Notice:</p>
              <p className="text-lg leading-relaxed">
                The information provided by Cura is not intended to be a substitute for professional medical advice, diagnosis, or treatment. 
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
            
            <motion.div 
              className="space-y-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
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
                  <Info className="h-6 w-6 mr-2" />
                  No Medical Diagnosis
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Cura does not provide medical diagnoses. The information provided by Cura is for informational and educational purposes only. 
                  The analysis of symptoms is based on general knowledge and statistical correlations, not on a personal examination of your health.
                </p>
              </motion.section>
              
              <motion.section 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-4 text-cura-danger flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Emergency Situations
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  If you think you may have a medical emergency, call your doctor or emergency services immediately. 
                  Cura's recommendations should never delay seeking professional medical advice, diagnosis, or treatment.
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
                  <Info className="h-6 w-6 mr-2" />
                  Limitations of AI
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  Cura uses artificial intelligence to analyze symptoms, but AI has limitations:
                </p>
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">It cannot perform physical examinations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">It cannot order or interpret medical tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">It has limited information about your specific medical history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">It may not have the most current medical research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">It cannot recognize non-verbal cues or subtle symptoms</span>
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
                  <Info className="h-6 w-6 mr-2" />
                  Health Recommendations
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  Any recommendations provided by Cura regarding home remedies, lifestyle changes, yoga, or dietary suggestions should be:
                </p>
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Discussed with a healthcare professional before implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Considered as general information, not personalized medical advice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cura-primary mr-2">•</span>
                    <span className="text-lg">Evaluated in the context of your full health profile, which Cura does not have</span>
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
                  <Info className="h-6 w-6 mr-2" />
                  No Doctor-Patient Relationship
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Using Cura does not create a doctor-patient relationship. Cura is a tool designed to provide information, 
                  not to replace the important relationship you have with your healthcare providers.
                </p>
              </motion.section>
            </motion.div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default Disclaimer;
