
import React from 'react';

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
    <section className="py-16 px-4 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Cura Works</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Getting health guidance with Cura is simple and straightforward. Here's how it works:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="border rounded-lg bg-white dark:bg-slate-800 p-6 h-full">
                <div className="text-5xl font-bold text-cura-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 right-0 transform translate-x-1/2 w-8 h-8 z-10">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
