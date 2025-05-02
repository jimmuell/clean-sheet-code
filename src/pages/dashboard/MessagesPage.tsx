
import { useState } from "react";
import { ConversationList } from "@/components/messaging/ConversationList";
import { MessageThread } from "@/components/messaging/MessageThread";
import { Conversation, Message } from "@/components/messaging/types";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";

const MessagesPage = () => {
  const [currentConversation, setCurrentConversation] = useState<string | null>("1");

  // Sample data
  const conversations: Conversation[] = [
    {
      id: "1",
      user: "John Smith",
      lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "09:32",
      unread: false,
      avatar: "JS"
    },
    {
      id: "2",
      user: "Sarah Johnson",
      lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "09:45",
      unread: true,
      avatar: "SJ"
    },
    {
      id: "3",
      user: "Michael Wilson",
      lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "10:12",
      unread: true,
      avatar: "MW"
    },
    {
      id: "4",
      user: "Jessica Taylor",
      lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "10:45",
      unread: false,
      avatar: "JT"
    },
    {
      id: "5",
      user: "David Brown",
      lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "11:22",
      unread: false,
      avatar: "DB"
    },
  ];

  const messages: { [key: string]: Message[] } = {
    "1": [
      {
        id: "1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        sender: "John Smith",
        timestamp: "22:02",
        isCurrentUser: false,
        read: true
      },
      {
        id: "2",
        content: "Lorem ipsum dolor sit amet, consectetur.",
        sender: "You",
        timestamp: "22:01",
        isCurrentUser: true,
        read: true
      },
      {
        id: "3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        sender: "John Smith",
        timestamp: "22:12",
        isCurrentUser: false,
        read: true
      },
      {
        id: "4",
        content: "Lorem ipsum dolor sit amet, consectetur.",
        sender: "You",
        timestamp: "22:15",
        isCurrentUser: true,
        read: true
      },
      {
        id: "5",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.",
        sender: "John Smith",
        timestamp: "22:18",
        isCurrentUser: false,
        read: false
      },
    ]
  };

  const handleSendMessage = (content: string) => {
    if (!currentConversation) return;
    
    // In a real app, this would send the message to the backend
    console.log("Sending message:", content);
  };

  const handleNewMessage = () => {
    console.log("Create new message");
    // This would open a dialog to select a user to message
  };

  const currentConversationData = currentConversation 
    ? conversations.find(c => c.id === currentConversation)
    : undefined;

  return (
    <div className="h-[calc(100vh-150px)] flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Messages</h1>
        <Button onClick={handleNewMessage} className="gap-2">
          <MessageSquarePlus className="h-4 w-4" />
          New Message
        </Button>
      </div>
      
      <div className="flex flex-1 gap-4 overflow-hidden">
        <ConversationList
          conversations={conversations}
          currentConversationId={currentConversation}
          onConversationSelect={setCurrentConversation}
          onNewMessage={handleNewMessage}
        />
        
        <MessageThread
          currentConversation={currentConversationData}
          messages={currentConversation ? messages[currentConversation] || [] : []}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default MessagesPage;
