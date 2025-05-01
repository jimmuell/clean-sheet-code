
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Check } from "lucide-react";
import { Message } from "./types";

interface MessageItemProps {
  message: Message;
  avatarFallback?: string;
}

export const MessageItem = ({ message, avatarFallback }: MessageItemProps) => {
  return (
    <div 
      key={message.id} 
      className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
    >
      {!message.isCurrentUser && (
        <Avatar className="mr-2 mt-1 hidden sm:inline-flex">
          <AvatarFallback>{avatarFallback || "?"}</AvatarFallback>
        </Avatar>
      )}
      
      <div 
        className={`max-w-[80%] px-4 py-2 rounded-lg ${
          message.isCurrentUser 
            ? 'bg-blue-500 text-white rounded-tr-none' 
            : 'bg-white border rounded-tl-none'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <div className={`flex items-center justify-end gap-1 mt-1 text-xs ${
          message.isCurrentUser ? 'text-blue-100' : 'text-gray-500'
        }`}>
          <span>{message.timestamp}</span>
          {message.isCurrentUser && 
            <Check className="h-3 w-3" />
          }
        </div>
      </div>
    </div>
  );
};
