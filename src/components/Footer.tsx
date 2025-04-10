
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 md:py-10 px-4 sm:px-6 border-t mt-auto bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="col-span-2 md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to="/" className="inline-block">
                <Logo />
              </Link>
            </motion.div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Cura is your AI-powered wellness companion designed to bring healthcare guidance to everyone.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary transition-colors">Home</Link></li>
              <li><Link to="/chat" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary transition-colors">Start Chat</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3 text-lg">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/disclaimer" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary transition-colors">Medical Disclaimer</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-sm text-gray-600 dark:text-gray-400">
          <p>By Kundan Ratakonda, Yuvan Nagalingam - 3rd year, SRMIST under the guidance of Shiny Angel, SRMIST.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
