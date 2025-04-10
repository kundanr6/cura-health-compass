
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';

const Header: React.FC = () => {
  const { currentUser, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  return (
    <header className="w-full py-4 px-4 sm:px-6 border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80 fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link to="/" className="flex items-center transition-transform duration-300">
            <Logo />
          </Link>
        </motion.div>
        <div className="flex items-center gap-4">
          {!currentUser ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" className="mr-2">
                <Link to="/auth">Register/Login</Link>
              </Button>
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="mr-2 flex items-center gap-2"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </motion.div>
          )}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button 
              asChild 
              variant="ghost" 
              className="p-2 relative"
            >
              <Link to="/profile">
                <motion.div
                  whileHover={{ 
                    boxShadow: "0 0 8px rgba(45, 212, 191, 0.5)" 
                  }}
                  className="rounded-full"
                >
                  <User className="h-5 w-5" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
