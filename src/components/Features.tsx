
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Bell, History, Shield, Activity, Stethoscope, UserCheck, MessageCircleHeart } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-cura-primary" />,
    title: 'AI Symptom Analysis',
    description: 'Advanced AI technology analyzes your symptoms to help identify possible conditions.',
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-cura-primary" />,
    title: 'Digital Health Assistant',
    description: 'Get personalized health guidance and recommendations from our AI assistant.',
  },
  {
    icon: <MessageCircleHeart className="w-8 h-8 text-cura-primary" />,
    title: 'Interactive Health Chat',
    description: 'Describe your symptoms in a natural conversation for personalized analysis.',
  },
  {
    icon: <Activity className="w-8 h-8 text-cura-primary" />,
    title: 'Wellness Suggestions',
    description: 'Receive lifestyle advice, home remedies, and preventive health tips.',
  },
  {
    icon: <Bell className="w-8 h-8 text-cura-primary" />,
    title: 'Emergency Alerts',
    description: 'Automatic alerts when symptoms may require immediate medical attention.',
  },
  {
    icon: <Shield className="w-8 h-8 text-cura-primary" />,
    title: 'Privacy First',
    description: 'Your health data stays private with no ads or commercial use of your information.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 overflow-hidden bg-slate-50/50 dark:bg-slate-900/50">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="h-full relative border rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
              >
                <CardContent className="p-5 sm:p-6 md:p-7">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-cura-primary/10 dark:bg-cura-primary/20">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-cura-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {feature.description}
                  </p>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cura-primary/5 to-transparent rounded-bl-full -z-10"></div>
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
