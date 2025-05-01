
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MessageThreadHeaderProps {
  userName: string;
  userAvatar: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onDateFilterChange: (date: Date | undefined) => void;
}

export const MessageThreadHeader = ({
  userName,
  userAvatar,
  searchQuery,
  onSearchChange,
  onDateFilterChange
}: MessageThreadHeaderProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    onDateFilterChange(selectedDate);
  };

  return (
    <div className="border-b p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>{userAvatar || "?"}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{userName || "Unknown User"}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            className="pl-10 py-1 h-8 text-sm" 
            placeholder="Search in messages" 
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
              <CalendarDays className="h-4 w-4 mr-1" />
              {date ? format(date, "MMM dd") : "Filter by date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
