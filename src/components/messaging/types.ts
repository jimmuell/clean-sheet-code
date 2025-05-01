
// Types for our messaging system
export type Message = {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  isCurrentUser: boolean;
  read: boolean;
};

export type Conversation = {
  id: string;
  user: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  avatar: string;
};
