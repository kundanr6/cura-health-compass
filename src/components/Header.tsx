
import React, { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, User, LogOut, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

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
    <header className="w-full py-3 md:py-4 px-4 sm:px-6 border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80 fixed top-0 z-10">
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

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[250px] sm:w-[300px] py-10">
              <div className="flex flex-col gap-6">
                <SheetClose asChild>
                  <Link to="/" className="flex items-center mb-6">
                    <Logo />
                  </Link>
                </SheetClose>
                <nav className="flex flex-col space-y-4">
                  <SheetClose asChild>
                    <Link to="/" className="px-2 py-1 hover:text-cura-primary transition-colors">
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/about" className="px-2 py-1 hover:text-cura-primary transition-colors">
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/chat" className="px-2 py-1 hover:text-cura-primary transition-colors">
                      Chat
                    </Link>
                  </SheetClose>
                </nav>
                <div className="mt-auto pt-6 border-t flex flex-col gap-3">
                  {!currentUser ? (
                    <SheetClose asChild>
                      <Button asChild className="w-full">
                        <Link to="/auth">Register/Login</Link>
                      </Button>
                    </SheetClose>
                  ) : (
                    <>
                      <SheetClose asChild>
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/profile">
                            <User className="h-4 w-4 mr-2" />
                            Profile
                          </Link>
                        </Button>
                      </SheetClose>
                      <Button 
                        variant="outline" 
                        className="w-full flex items-center gap-2"
                        onClick={handleSignOut}
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
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
