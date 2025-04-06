
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80 fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="mr-2">
            <Link to="/auth">Register/Login</Link>
          </Button>
          <Button asChild variant="ghost" className="p-2">
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
