
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, LogOut, LayoutDashboard, UserRound, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/auth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const DashboardHeader = () => {
  const { user, userRole } = useAuth();
  const navigate = useNavigate();
  const userInitial = user?.email?.[0].toUpperCase() || "U";
  const profileImageUrl = "https://13b230a26e2df65b20120dfd797ddd2e.cdn.bubble.io/f1743425234044x485647232123858100/uifaces-popular-image%20%284%29.jpg?_gl=1*rz3q8v*_gcl_au*NzMzNjIyMTA2LjE3NDE5NDkyMTA.*_ga*MTQyOTYxMTA5Ny4xNzM5ODEwMDA3*_ga_BFPVR2DEE2*MTc0NjE1MTY0My4yLjAuMTc0NjE1MTY0My42MC4wLjA.";

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <header className="bg-white border-b border-purple-100 shadow-sm">
      <div className="flex h-14 items-center justify-between px-4">
        <SidebarTrigger className="text-brand-purple hover:bg-brand-purple/10" />
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10 border-2 border-brand-purple/20">
                    <AvatarImage src={profileImageUrl} alt="User profile" />
                    <AvatarFallback className="bg-gradient-to-br from-brand-purple to-brand-blue text-white">{userInitial}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span className="text-base font-semibold">John Doe</span>
                    <span className="text-sm text-brand-purple">
                      {userRole?.toLowerCase() || 'client'}
                    </span>
                  </div>
                  <ChevronDown size={16} className="text-muted-foreground ml-1" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 border border-purple-100 shadow-lg">
              <DropdownMenuLabel className="text-lg font-semibold py-3">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-purple-100/50" />
              <DropdownMenuItem asChild className="py-3 text-base hover:text-brand-purple hover:bg-brand-purple/5">
                <Link to="/dashboard" className="flex items-center">
                  <LayoutDashboard className="mr-3 h-5 w-5 text-brand-purple/70" />
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="py-3 text-base hover:text-brand-purple hover:bg-brand-purple/5">
                <Link to="/dashboard/profile" className="flex items-center">
                  <UserRound className="mr-3 h-5 w-5 text-brand-purple/70" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="py-3 text-base hover:text-brand-purple hover:bg-brand-purple/5">
                <Link to="/dashboard/settings" className="flex items-center">
                  <Settings className="mr-3 h-5 w-5 text-brand-purple/70" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-purple-100/50" />
              <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer py-3 text-base text-red-500 hover:text-red-600 hover:bg-red-50">
                <LogOut className="mr-3 h-5 w-5" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
