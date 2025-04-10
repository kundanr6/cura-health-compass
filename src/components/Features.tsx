
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
    <section className="py-12 md:py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Health Guidance at Your Fingertips</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Cura combines AI technology with medical knowledge to provide accessible health guidance for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative border rounded-lg bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow group"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl mb-3 md:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-cura-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
