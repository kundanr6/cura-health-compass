
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cura-dark dark:text-white leading-tight">
              Your AI Health Guide for Everyone, Everywhere
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Cura analyzes your symptoms in multiple languages, offers health guidance, and provides wellness tips—no doctor required.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-cura-primary to-cura-secondary hover:opacity-90 transition-opacity">
                <Link to="/auth">
                  Start Health Chat
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative mt-8 md:mt-0">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
              <div className="absolute top-0 left-0 w-[220px] sm:w-[280px] h-[140px] sm:h-[180px] bg-cura-primary/10 rounded-lg p-4 sm:p-5 shadow-lg border backdrop-blur-sm transform rotate-[-5deg]">
                <div className="h-3 sm:h-4 w-24 sm:w-32 bg-cura-primary/30 rounded-full mb-2 sm:mb-3"></div>
                <div className="h-2 w-36 sm:w-48 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-2 w-32 sm:w-40 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-2 w-34 sm:w-44 bg-gray-300 rounded-full"></div>
              </div>
              <div className="absolute top-[80px] sm:top-[100px] right-0 w-[200px] sm:w-[260px] h-[160px] sm:h-[200px] bg-white dark:bg-slate-900 rounded-lg p-4 sm:p-5 shadow-lg border transform rotate-[3deg]">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-cura-secondary"></div>
                  <div className="h-2 sm:h-3 w-16 sm:w-20 bg-gray-200 dark:bg-slate-700 rounded-full"></div>
                </div>
                <div className="h-2 w-36 sm:w-48 bg-gray-200 dark:bg-slate-700 rounded-full mb-2"></div>
                <div className="h-2 w-32 sm:w-40 bg-gray-200 dark:bg-slate-700 rounded-full mb-2"></div>
                <div className="h-2 w-34 sm:w-44 bg-gray-200 dark:bg-slate-700 rounded-full mb-3 sm:mb-4"></div>
                <div className="h-6 sm:h-8 w-24 sm:w-32 bg-cura-primary/20 rounded-md ml-auto"></div>
              </div>
              <div className="absolute bottom-0 left-[20px] sm:left-[50px] w-[220px] sm:w-[290px] h-[130px] sm:h-[160px] bg-white dark:bg-slate-900 rounded-lg p-4 sm:p-5 shadow-lg border transform rotate-[1deg]">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-cura-primary"></div>
                  <div className="h-2 sm:h-3 w-16 sm:w-20 bg-gray-200 dark:bg-slate-700 rounded-full"></div>
                </div>
                <div className="h-2 w-36 sm:w-48 bg-gray-200 dark:bg-slate-700 rounded-full mb-2"></div>
                <div className="h-2 w-34 sm:w-44 bg-gray-200 dark:bg-slate-700 rounded-full mb-2"></div>
                <div className="h-2 w-32 sm:w-40 bg-gray-200 dark:bg-slate-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
