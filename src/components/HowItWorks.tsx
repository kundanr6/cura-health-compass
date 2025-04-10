
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Describe Your Symptoms',
    description: 'Tell Cura how you\'re feeling using natural language in your preferred language.',
  },
  {
    number: '02',
    title: 'AI Analysis',
    description: 'Our advanced algorithms analyze your symptoms to identify possible conditions.',
  },
  {
    number: '03',
    title: 'Get Personalized Guidance',
    description: 'Receive health suggestions, wellness tips, and appropriate next steps.',
  },
  {
    number: '04',
    title: 'Track Your Health',
    description: 'Review your conversation history to monitor your symptoms over time.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">How Cura Works</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Getting health guidance with Cura is simple and straightforward. Here's how it works:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <CardContent className="p-4 sm:p-5 md:p-8 relative">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cura-primary/20 mb-2 sm:mb-3 md:mb-4">{step.number}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="lg:block hidden absolute top-1/3 right-0 transform translate-x-1/2 w-8 h-8 z-10">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-cura-primary"
                      >
                        <path d="M10 0L20 10L10 20L8.5 18.5L16 11H0V9H16L8.5 1.5L10 0Z" fill="currentColor"/>
                      </svg>
                    </div>
                  )}
                  <div className="block lg:hidden absolute bottom-4 right-4">
                    {index < steps.length - 1 && (
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-cura-primary"
                      >
                        <path d="M10 0L20 10L10 20L8.5 18.5L16 11H0V9H16L8.5 1.5L10 0Z" fill="currentColor"/>
                      </svg>
                    )}
                  </div>
                  <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-cura-primary to-cura-primary/0"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
