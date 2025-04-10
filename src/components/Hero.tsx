
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, MessageCircleHeart, Shield, UserRound, Stethoscope } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Hero: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const handleChatClick = () => {
    if (!currentUser) {
      navigate('/auth');
    } else {
      navigate('/chat');
    }
  };

  return (
    <section className="gradient-bg py-10 md:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left md:order-1 order-2"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-cura-dark dark:text-white leading-tight">
              Your AI Health Guide for Everyone, Everywhere
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
              Cura analyzes your symptoms, offers health guidance, and provides wellness tips—no doctor required.
            </p>
          </motion.div>

          <div className="flex-1 relative md:order-2 order-1 mb-8 md:mb-0">
            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px]">
              {/* AI Brain Analysis */}
              <motion.div 
                initial={{ opacity: 0, y: -20, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute top-0 left-0 md:left-10 w-[160px] sm:w-[180px] md:w-[220px] bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5 shadow-lg border border-gray-200 dark:border-gray-700 z-30"
              >
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <Brain className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-cura-primary" />
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full mb-2"></div>
                <div className="h-2 w-5/6 bg-gray-200 dark:bg-gray-700 rounded-full mb-2"></div>
                <div className="h-2 w-4/6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="h-2 sm:h-3 w-12 sm:w-16 bg-cura-primary/20 rounded-full"></div>
                  <div className="text-xs font-medium text-cura-primary">AI Analysis</div>
                </div>
              </motion.div>

              {/* Digital Health Assistant */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute top-[80px] sm:top-[90px] md:top-[100px] right-0 md:right-10 w-[160px] sm:w-[180px] md:w-[220px] bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5 shadow-lg border border-gray-200 dark:border-gray-700 z-20"
              >
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-cura-secondary" />
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full mb-2"></div>
                <div className="h-2 w-5/6 bg-gray-200 dark:bg-gray-700 rounded-full mb-2"></div>
                <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="h-2 sm:h-3 w-12 sm:w-16 bg-cura-secondary/20 rounded-full"></div>
                  <div className="text-xs font-medium text-cura-secondary">Digital Doctor</div>
                </div>
              </motion.div>

              {/* Chat Interface */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-10 left-5 md:left-20 w-[160px] sm:w-[180px] md:w-[220px] bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5 shadow-lg border border-gray-200 dark:border-gray-700 z-40"
              >
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <MessageCircleHeart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-cura-primary" />
                </div>
                <div className="flex gap-2 mb-2 sm:mb-3">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 bg-cura-primary/20 rounded-full flex items-center justify-center">
                    <UserRound className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cura-primary" />
                  </div>
                  <div className="h-1.5 sm:h-2 w-16 sm:w-24 bg-gray-200 dark:bg-gray-700 rounded-full self-center"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 bg-cura-secondary/20 rounded-full flex items-center justify-center">
                    <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cura-secondary" />
                  </div>
                  <div className="h-1.5 sm:h-2 w-14 sm:w-20 bg-gray-200 dark:bg-gray-700 rounded-full self-center"></div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="h-2 sm:h-3 w-10 sm:w-12 bg-cura-primary/20 rounded-full"></div>
                  <div className="text-xs font-medium text-cura-primary">Health Chat</div>
                </div>
              </motion.div>

              {/* Connection Lines (decorative) */}
              <svg className="absolute inset-0 w-full h-full z-10 opacity-60 dark:opacity-40" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 80 L200 150 L300 120" stroke="url(#grad1)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <path d="M100 80 L150 220" stroke="url(#grad2)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <path d="M300 120 L150 220" stroke="url(#grad3)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-cura-primary to-cura-secondary hover:opacity-90 transition-opacity shadow-md text-sm sm:text-base"
              onClick={handleChatClick}
            >
              Start Health Chat
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Button asChild size="lg" variant="outline" className="w-full border-2 hover:bg-white/10 text-sm sm:text-base">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
