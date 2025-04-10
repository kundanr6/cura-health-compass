
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-r from-cura-primary to-cura-secondary p-6 sm:p-10 md:p-16 text-white text-center"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
        >
          Ready to take control of your health?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white/90 mb-6 md:mb-8 max-w-xl mx-auto font-medium text-base md:text-lg"
        >
          Start a conversation with Cura and get personalized health guidance based on your symptoms.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-cura-primary hover:bg-gray-100">
              <Link to="/auth">
                Register/Login
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto bg-cura-primary text-white hover:bg-cura-primary/90">
              <Link to="/auth">
                Start Health Chat
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
