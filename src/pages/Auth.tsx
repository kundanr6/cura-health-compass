
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { motion } from 'framer-motion';

const Auth = () => {
  const navigate = useNavigate();

  const handleGuestAccess = () => {
    // Navigate directly to the chat page for guest users
    navigate('/chat');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 gradient-bg">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 space-y-6 border border-gray-100 dark:border-slate-800"
      >
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold text-cura-dark dark:text-white">Access Cura</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Please sign in or register to continue</p>
        </div>
        
        <div className="space-y-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="secondary" 
              className="w-full"
              asChild
            >
              <Link to="/login">
                Login
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="outline" 
              className="w-full"
              asChild
            >
              <Link to="/register">
                Register
              </Link>
            </Button>
          </motion.div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-900 px-2 text-gray-500">Or</span>
            </div>
          </div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              variant="ghost" 
              className="w-full text-gray-600 dark:text-gray-400"
              onClick={handleGuestAccess}
            >
              Continue as Guest
            </Button>
          </motion.div>
        </div>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 px-6">
          Sign in or register to save your chat history and profile. Continue as guest to explore without saving anything.
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
