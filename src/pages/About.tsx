
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const About = () => {
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
          <h1 className="text-5xl font-bold mb-8 text-cura-dark dark:text-white">About Cura</h1>
          
          <div className="prose dark:prose-invert max-w-none space-y-12">
            <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-cura-primary">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Cura was created with a simple but important mission: to make basic healthcare guidance accessible to everyone, everywhere. 
                We believe that understanding your health shouldn't be limited by your location, language, or access to medical professionals.
              </p>
            </section>
            
            <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-cura-primary">What Cura Can Do</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Cura uses artificial intelligence to analyze your symptoms and provide possible explanations and guidance. It can:
              </p>
              <ul className="list-none pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-cura-primary mr-2">•</span>
                  <span className="text-lg">Analyze your symptoms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-primary mr-2">•</span>
                  <span className="text-lg">Provide possible conditions that match your symptoms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-primary mr-2">•</span>
                  <span className="text-lg">Offer home remedies and lifestyle recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-primary mr-2">•</span>
                  <span className="text-lg">Suggest dietary changes and yoga practices for wellness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-primary mr-2">•</span>
                  <span className="text-lg">Alert you when symptoms might require urgent attention</span>
                </li>
              </ul>
            </section>
            
            <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-cura-primary">What Cura Is Not</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                It's important to understand that Cura is not a replacement for professional medical care:
              </p>
              <ul className="list-none pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-cura-secondary mr-2">•</span>
                  <span className="text-lg">Cura does not provide medical diagnoses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-secondary mr-2">•</span>
                  <span className="text-lg">It cannot prescribe medications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-secondary mr-2">•</span>
                  <span className="text-lg">It doesn't have access to your medical history or test results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-secondary mr-2">•</span>
                  <span className="text-lg">It's not a substitute for emergency services</span>
                </li>
              </ul>
            </section>
            
            <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-cura-primary">Privacy First</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Your health information is personal and private. Cura was designed with privacy as a core principle:
              </p>
              <ul className="list-none pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-cura-accent mr-2">•</span>
                  <span className="text-lg">No data is stored longer than necessary</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-accent mr-2">•</span>
                  <span className="text-lg">Your conversations are not used to train our models without consent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-accent mr-2">•</span>
                  <span className="text-lg">We don't sell or share your health information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-accent mr-2">•</span>
                  <span className="text-lg">No advertising or monetization of your health data</span>
                </li>
              </ul>
            </section>
            
            <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-cura-primary">Who We Built Cura For</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Cura was designed for:
              </p>
              <ul className="list-none pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-cura-primary mr-2">•</span>
                  <span className="text-lg">People in remote areas with limited access to healthcare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-primary mr-2">•</span>
                  <span className="text-lg">Those seeking to understand basic symptoms before deciding to see a doctor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cura-primary mr-2">•</span>
                  <span className="text-lg">Anyone interested in holistic wellness and preventative health</span>
                </li>
              </ul>
            </section>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 text-center"
          >
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-cura-primary to-cura-secondary hover:opacity-90 transition-all duration-300">
                Start Using Cura
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default About;
