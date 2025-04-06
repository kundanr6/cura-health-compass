
import React from 'react';
import Logo from '../Logo';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-2 px-4 mb-4">
      <div className="flex-shrink-0 mt-1">
        <Logo size="sm" withText={false} />
      </div>
      <div className="px-4 py-3 bg-white dark:bg-slate-800 border rounded-2xl rounded-tl-none flex items-center">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-cura-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-cura-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-cura-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
