
import React from 'react';

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
    icon: '💬',
    title: 'Multilingual Support',
    description: 'Chat in English, Hindi, Telugu, or Tamil for inclusive healthcare guidance.',
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
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Health Guidance at Your Fingertips</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Cura combines AI technology with medical knowledge to provide accessible health guidance for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-6 border rounded-lg bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-cura-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
