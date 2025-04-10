
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg py-12 md:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cura-dark dark:text-white leading-tight">
              Your AI Health Guide for Everyone, Everywhere
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
              Cura analyzes your symptoms, offers health guidance, and provides wellness tips—no doctor required.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button asChild size="lg" className="w-full bg-gradient-to-r from-cura-primary to-cura-secondary hover:opacity-90 transition-opacity shadow-md">
                  <Link to="/auth">
                    Start Health Chat
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button asChild size="lg" variant="outline" className="w-full border-2 hover:bg-white/10">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <div className="flex-1 relative mt-10 md:mt-0">
            <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px]">
              <motion.div 
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: -5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute top-0 left-0 w-[180px] sm:w-[220px] md:w-[260px] h-[120px] sm:h-[140px] md:h-[160px] bg-cura-primary/10 rounded-lg p-4 sm:p-5 shadow-lg border backdrop-blur-sm z-10"
              >
                <div className="h-3 sm:h-4 w-24 sm:w-32 bg-cura-primary/30 rounded-full mb-2 sm:mb-3"></div>
                <div className="h-2 w-36 sm:w-48 bg-gray-300 dark:bg-gray-700 rounded-full mb-2"></div>
                <div className="h-2 w-32 sm:w-40 bg-gray-300 dark:bg-gray-700 rounded-full mb-2"></div>
                <div className="h-2 w-34 sm:w-44 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, rotate: 10 }}
                animate={{ opacity: 1, rotate: 3 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute top-[60px] sm:top-[80px] md:top-[100px] right-0 w-[180px] sm:w-[220px] md:w-[260px] h-[140px] sm:h-[160px] md:h-[180px] bg-white dark:bg-slate-900 rounded-lg p-4 sm:p-5 shadow-lg border z-20"
              >
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-cura-secondary"></div>
                  <div className="h-2 sm:h-3 w-16 sm:w-20 bg-gray-200 dark:bg-slate-700 rounded-full"></div>
                </div>
                <div className="h-2 w-36 sm:w-48 bg-gray-200 dark:bg-slate-700 rounded-full mb-2"></div>
                <div className="h-2 w-32 sm:w-40 bg-gray-200 dark:bg-slate-700 rounded-full mb-2"></div>
                <div className="h-2 w-34 sm:w-44 bg-gray-200 dark:bg-slate-700 rounded-full mb-3 sm:mb-4"></div>
                <div className="h-6 sm:h-8 w-24 sm:w-32 bg-cura-primary/20 rounded-md ml-auto"></div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bottom-0 left-[10px] sm:left-[30px] md:left-[50px] w-[180px] sm:w-[220px] md:w-[260px] h-[110px] sm:h-[130px] md:h-[150px] bg-white dark:bg-slate-900 rounded-lg p-3 sm:p-4 md:p-5 shadow-lg border z-30"
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 rounded-full bg-cura-primary"></div>
                  <div className="h-2 sm:h-2.5 w-14 sm:w-16 bg-gray-200 dark:bg-slate-700 rounded-full"></div>
                </div>
                <div className="h-2 w-36 sm:w-40 bg-gray-200 dark:bg-slate-700 rounded-full mb-1.5 sm:mb-2"></div>
                <div className="h-2 w-32 sm:w-36 bg-gray-200 dark:bg-slate-700 rounded-full mb-1.5 sm:mb-2"></div>
                <div className="h-2 w-28 sm:w-32 bg-gray-200 dark:bg-slate-700 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
