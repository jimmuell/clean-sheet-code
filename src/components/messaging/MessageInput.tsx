
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
}

export const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [messageInput, setMessageInput] = useState("");
  
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    onSendMessage(messageInput);
    setMessageInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
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
  );
};
