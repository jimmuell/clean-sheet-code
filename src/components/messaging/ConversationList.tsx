
import { useState } from "react";
import { Conversation } from "./types";
import { ConversationItem } from "./ConversationItem";
import { ConversationSearch } from "./ConversationSearch";
import { Card } from "@/components/ui/card";

interface ConversationListProps {
  conversations: Conversation[];
  currentConversationId: string | null;
  onConversationSelect: (id: string) => void;
  onNewMessage: () => void;
}

export const ConversationList = ({ 
  conversations, 
  currentConversationId, 
  onConversationSelect,
  onNewMessage
}: ConversationListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredConversations = searchQuery 
    ? conversations.filter(conv => 
        conv.user.toLowerCase().includes(searchQuery.toLowerCase()) || 
        conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : conversations;

  return (
    <Card className="w-1/3 max-w-sm flex flex-col overflow-hidden shadow-sm">
      <ConversationSearch 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNewMessage={onNewMessage}
      />
      
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map((conv) => (
          <ConversationItem
            key={conv.id}
            conversation={conv}
            isActive={currentConversationId === conv.id}
            onClick={() => onConversationSelect(conv.id)}
          />
        ))}
      </div>
    </Card>
  );
};
