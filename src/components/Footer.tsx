
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 border-t mt-auto bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Cura is your multilingual AI-powered wellness companion designed to bring healthcare guidance to everyone.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary">Home</Link></li>
              <li><Link to="/chat" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary">Start Chat</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/disclaimer" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary">Medical Disclaimer</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-cura-primary dark:hover:text-cura-primary">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Cura Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
