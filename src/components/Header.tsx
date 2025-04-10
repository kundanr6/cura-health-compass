
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, User, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

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
    <header className="w-full py-3 md:py-4 px-4 sm:px-6 border-b bg-white/90 backdrop-blur-md dark:bg-slate-950/90 fixed top-0 z-10">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link to="/chat" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-cura-primary/50 to-cura-secondary/50 p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 text-lg font-medium text-white">
                            Health Chat
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Start a personalized health consultation with Cura AI.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our mission and technology.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/disclaimer" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Medical Disclaimer</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Important information about our health guidance.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/chat" className={navigationMenuTriggerStyle()}>
                  Chat
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-3">
            {!currentUser ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" className="border-2">
                  <Link to="/auth">Register/Login</Link>
                </Button>
              </motion.div>
            ) : (
              <>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-2"
                    onClick={handleSignOut}
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button 
                    asChild 
                    className="p-2 relative rounded-full bg-cura-primary/10 hover:bg-cura-primary/20"
                  >
                    <Link to="/profile">
                      <motion.div
                        whileHover={{ 
                          boxShadow: "0 0 8px rgba(45, 212, 191, 0.5)" 
                        }}
                        className="rounded-full"
                      >
                        <User className="h-5 w-5 text-cura-primary" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[280px] sm:w-[350px] py-10">
              <div className="flex flex-col h-full">
                <SheetClose asChild>
                  <Link to="/" className="flex items-center mb-8">
                    <Logo />
                  </Link>
                </SheetClose>
                <nav className="flex flex-col space-y-5">
                  <SheetClose asChild>
                    <Link to="/" className="px-2 py-1.5 text-lg hover:text-cura-primary transition-colors">
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/about" className="px-2 py-1.5 text-lg hover:text-cura-primary transition-colors">
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/chat" className="px-2 py-1.5 text-lg hover:text-cura-primary transition-colors">
                      Chat
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/disclaimer" className="px-2 py-1.5 text-lg hover:text-cura-primary transition-colors">
                      Medical Disclaimer
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
      </div>
    </header>
  );
};

export default Header;
