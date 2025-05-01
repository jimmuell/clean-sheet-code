
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Send, Check } from "lucide-react";

// Types for our messaging system
type Message = {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  isCurrentUser: boolean;
  read: boolean;
};

type Conversation = {
  id: string;
  user: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  avatar: string;
};

const MessagesPage = () => {
  const [currentConversation, setCurrentConversation] = useState<string | null>("1");
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredConversations = searchQuery 
    ? conversations.filter(conv => 
        conv.user.toLowerCase().includes(searchQuery.toLowerCase()) || 
        conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : conversations;

  const handleSendMessage = () => {
    if (!messageInput.trim() || !currentConversation) return;
    
    // In a real app, this would send the message to the backend
    console.log("Sending message:", messageInput);
    
    // Clear input after sending
    setMessageInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-[calc(100vh-150px)] flex flex-col">
      <h1 className="text-3xl font-bold mb-4">Messages</h1>
      
      <div className="flex flex-1 gap-4 overflow-hidden">
        {/* Left sidebar with conversation list */}
        <Card className="w-1/3 max-w-sm flex flex-col overflow-hidden shadow-sm">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                className="pl-10 bg-gray-50" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <div 
                key={conv.id}
                className={`p-4 border-b flex items-start gap-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                  currentConversation === conv.id ? 'bg-blue-50' : ''
                }`}
                onClick={() => setCurrentConversation(conv.id)}
              >
                <Avatar className={`${conv.unread ? 'ring-2 ring-blue-500' : ''}`}>
                  <AvatarFallback>{conv.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <span className="font-medium text-sm">{conv.user}</span>
                    <span className="text-xs text-gray-500">{conv.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread && (
                  <span className="h-2 w-2 rounded-full bg-green-500 flex-shrink-0 mt-2"></span>
                )}
              </div>
            ))}
          </div>
        </Card>
        
        {/* Right side message thread */}
        <Card className="flex-1 flex flex-col overflow-hidden shadow-sm">
          {currentConversation ? (
            <>
              {/* Message thread header */}
              <div className="border-b p-4 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>
                    {conversations.find(c => c.id === currentConversation)?.avatar || "?"}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium">
                  {conversations.find(c => c.id === currentConversation)?.user || "Unknown User"}
                </span>
              </div>
              
              {/* Message thread content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages[currentConversation]?.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!message.isCurrentUser && (
                      <Avatar className="mr-2 mt-1 hidden sm:inline-flex">
                        <AvatarFallback>
                          {conversations.find(c => c.id === currentConversation)?.avatar || "?"}
                        </AvatarFallback>
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
                ))}
              </div>
              
              {/* Message input */}
              <div className="border-t p-4 flex items-end gap-2">
                <Textarea
                  className="min-h-[60px] resize-none"
                  placeholder="Message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <Button 
                  className="rounded-full h-10 w-10 p-0 flex-shrink-0"
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              Select a conversation to start messaging
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default MessagesPage;
