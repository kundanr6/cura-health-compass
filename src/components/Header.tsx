
import React from 'react';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type HeaderProps = {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
};

const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80 fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
          <Button asChild variant="outline" className="mr-2">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/chat">Start Conversation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
