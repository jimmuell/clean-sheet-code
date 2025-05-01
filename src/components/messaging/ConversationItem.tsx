
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Conversation } from "./types";

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}

export const ConversationItem = ({ conversation, isActive, onClick }: ConversationItemProps) => {
  return (
    <div 
      className={`p-4 border-b flex items-start gap-3 cursor-pointer hover:bg-gray-50 transition-colors ${
        isActive ? 'bg-blue-50' : ''
      }`}
      onClick={onClick}
    >
      <Avatar className={`${conversation.unread ? 'ring-2 ring-blue-500' : ''}`}>
        <AvatarFallback>{conversation.avatar}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <span className="font-medium text-sm">{conversation.user}</span>
          <span className="text-xs text-gray-500">{conversation.timestamp}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
      </div>
      {conversation.unread && (
        <span className="h-2 w-2 rounded-full bg-green-500 flex-shrink-0 mt-2"></span>
      )}
    </div>
  );
};
