
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface MessageThreadHeaderProps {
  userName: string;
  userAvatar: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const MessageThreadHeader = ({
  userName,
  userAvatar,
  searchQuery,
  onSearchChange
}: MessageThreadHeaderProps) => {
  return (
    <div className="border-b p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>{userAvatar || "?"}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{userName || "Unknown User"}</span>
      </div>
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input 
          className="pl-10 py-1 h-8 text-sm" 
          placeholder="Search in conversation" 
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};
