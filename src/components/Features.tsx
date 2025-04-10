
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🧠',
    title: 'Disease Prediction',
    description: 'AI-powered analysis that predicts possible conditions based on your symptoms.',
  },
  {
    icon: '🌿',
    title: 'Holistic Wellness',
    description: 'Home remedies, lifestyle tips, yoga routines, and dietary suggestions.',
  },
  {
    icon: '📣',
    title: 'Emergency Alerts',
    description: 'Automatic alerts when symptoms may require immediate medical attention.',
  },
  {
    icon: '📱',
    title: 'Chat History',
    description: 'Track your health conversations and symptoms over time for better insights.',
  },
  {
    icon: '🔐',
    title: 'Privacy First',
    description: 'Your health data stays private with no ads or commercial use of your information.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Health Guidance at Your Fingertips</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Cura combines AI technology with medical knowledge to provide accessible health guidance for everyone.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="h-full relative border rounded-lg bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
              >
                <CardContent className="p-5 sm:p-6 md:p-8">
                  <div className="text-3xl sm:text-4xl mb-3 md:mb-4">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-cura-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {feature.description}
                  </p>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cura-primary/10 to-transparent rounded-bl-full -z-10"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
