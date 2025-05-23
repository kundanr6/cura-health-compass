
import React from 'react';
import { motion } from 'framer-motion';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
};

const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true }) => {
  const sizeMap = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  return (
    <div className="flex items-center gap-2">
      <motion.div 
        className={`relative ${sizeMap[size]}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-cura-primary"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            d="M50 10C27.909 10 10 27.909 10 50C10 72.091 27.909 90 50 90C72.091 90 90 72.091 90 50C90 27.909 72.091 10 50 10Z"
            fillOpacity="0.2"
          />
          <motion.path
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.5, 0.4] }}
            transition={{ duration: 3, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
            d="M50 20C33.431 20 20 33.431 20 50C20 66.569 33.431 80 50 80C66.569 80 80 66.569 80 50C80 33.431 66.569 20 50 20Z"
            fillOpacity="0.4"
          />
          <motion.path
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 0.7, 0.6] }}
            transition={{ duration: 3, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
            d="M50 30C39.507 30 31 38.507 31 49C31 59.493 39.507 68 50 68C60.493 68 69 59.493 69 49C69 38.507 60.493 30 50 30Z"
            fillOpacity="0.6"
          />
          <motion.path
            initial={{ opacity: 0.8 }}
            animate={{ opacity: [0.8, 0.9, 0.8] }}
            transition={{ duration: 3, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
            d="M50 40C45.029 40 41 44.029 41 49C41 53.971 45.029 58 50 58C54.971 58 59 53.971 59 49C59 44.029 54.971 40 50 40Z"
            fillOpacity="0.8"
          />
          <motion.path
            initial={{ opacity: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
            d="M50 45C47.791 45 46 46.791 46 49C46 51.209 47.791 53 50 53C52.209 53 54 51.209 54 49C54 46.791 52.209 45 50 45Z"
            fillOpacity="1"
          />
        </svg>
        <motion.div 
          className="absolute -top-1 -right-1 w-3 h-3 bg-cura-secondary rounded-full border-2 border-white"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      {withText && (
        <motion.span 
          className="font-display font-bold text-2xl bg-gradient-to-r from-cura-primary to-cura-secondary bg-clip-text text-transparent"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Cura
        </motion.span>
      )}
    </div>
  );
};

export default Logo;
