
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';

const CTA: React.FC = () => {
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
    <section className="py-10 md:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-cura-primary to-cura-secondary p-5 sm:p-6 md:p-8 lg:p-12 text-white text-center relative overflow-hidden shadow-lg"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10"></div>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 relative z-10"
          >
            Ready to take control of your health?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto font-medium text-xs sm:text-sm md:text-base lg:text-lg relative z-10"
          >
            Start a conversation with Cura and get personalized health guidance based on your symptoms.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 relative z-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant={!currentUser ? "secondary" : "default"}
                className={`w-full sm:w-auto ${!currentUser ? 'bg-white text-cura-primary hover:bg-gray-100' : 'bg-cura-primary/90 border border-white/30 text-white hover:bg-cura-primary/80'} shadow-md text-xs sm:text-sm md:text-base`}
                onClick={handleChatClick}
              >
                {!currentUser ? "Register/Login" : "Start Health Chat"}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
