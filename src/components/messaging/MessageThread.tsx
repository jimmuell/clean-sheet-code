
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MessageItem } from "./MessageItem";
import { MessageInput } from "./MessageInput";
import { MessageThreadHeader } from "./MessageThreadHeader";
import { Conversation, Message } from "./types";

interface MessageThreadProps {
  currentConversation: Conversation | undefined;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export const MessageThread = ({ 
  currentConversation, 
  messages,
  onSendMessage
}: MessageThreadProps) => {
  const [searchMessageQuery, setSearchMessageQuery] = useState("");
  
  const filteredMessages = searchMessageQuery
    ? messages.filter(msg => 
        msg.content.toLowerCase().includes(searchMessageQuery.toLowerCase())
      )
    : messages;
    
  if (!currentConversation) {
    return (
      <Card className="flex-1 flex items-center justify-center shadow-sm">
        <div className="text-muted-foreground">
          Select a conversation to start messaging
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex-1 flex flex-col overflow-hidden shadow-sm">
      <MessageThreadHeader
        userName={currentConversation.user}
        userAvatar={currentConversation.avatar}
        searchQuery={searchMessageQuery}
        onSearchChange={setSearchMessageQuery}
      />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {filteredMessages.map((message) => (
          <MessageItem 
            key={message.id} 
            message={message} 
            avatarFallback={currentConversation.avatar}
          />
        ))}
      </div>
      
      <MessageInput onSendMessage={onSendMessage} />
    </Card>
  );
};
