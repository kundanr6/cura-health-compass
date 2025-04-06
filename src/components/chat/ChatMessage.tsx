
import React from 'react';
import { Message } from '@/types/chat';
import { cn } from '@/lib/utils';
import Logo from '../Logo';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const isSystem = message.role === 'system';
  
  // Format timestamp
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(new Date(message.timestamp));

  if (isSystem) {
    return (
      <div className="flex justify-center my-4 px-4">
        <div className="bg-muted/50 text-muted-foreground py-2 px-4 rounded-full text-sm">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "flex w-full mb-4 px-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "flex max-w-[80%]",
        isUser ? "flex-row-reverse" : "flex-row",
        "items-start gap-2"
      )}>
        {!isUser && (
          <div className="flex-shrink-0 mt-1">
            <Logo size="sm" withText={false} />
          </div>
        )}
        <div className={cn(
          "px-4 py-3 rounded-2xl flex flex-col",
          isUser 
            ? "bg-cura-primary text-white rounded-tr-none" 
            : "bg-white dark:bg-slate-800 border rounded-tl-none"
        )}>
          {isUser ? (
            <p className="whitespace-pre-wrap break-words">{message.content}</p>
          ) : (
            <div className="prose dark:prose-invert prose-sm max-w-none">
              <ReactMarkdown>
                {message.content}
              </ReactMarkdown>
            </div>
          )}
          <span className={cn(
            "text-xs mt-1 self-end",
            isUser ? "text-white/70" : "text-muted-foreground"
          )}>
            {formattedTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
