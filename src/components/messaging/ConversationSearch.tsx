
import { Search, Edit } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ConversationSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNewMessage: () => void;
}

export const ConversationSearch = ({ 
  searchQuery, 
  onSearchChange, 
  onNewMessage 
}: ConversationSearchProps) => {
  return (
    <div className="p-4 border-b">
      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            className="pl-10 bg-gray-50" 
            placeholder="Search conversations" 
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <Button
          onClick={onNewMessage}
          variant="outline"
          size="icon"
          className="rounded-md h-10 w-10 flex-shrink-0"
        >
          <Edit className="h-5 w-5 text-gray-500" />
        </Button>
      </div>
    </div>
  );
};
