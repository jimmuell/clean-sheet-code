
import React from "react";
import { useAuth } from "@/auth";
import { useNavigate, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  UserRound,
  Settings,
  LogOut,
  LifeBuoy,
  ChevronDown,
  Calendar,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator
} from "@/components/ui/sidebar";
import { supabase } from "@/integrations/supabase/client";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, userRole } = useAuth();
  const navigate = useNavigate();
  const userInitial = user?.email?.[0].toUpperCase() || "U";
  const profileImageUrl = "https://13b230a26e2df65b20120dfd797ddd2e.cdn.bubble.io/f1743425234044x485647232123858100/uifaces-popular-image%20%284%29.jpg?_gl=1*rz3q8v*_gcl_au*NzMzNjIyMTA2LjE3NDE5NDkyMTA.*_ga*MTQyOTYxMTA5Ny4xNzM5ODEwMDA3*_ga_BFPVR2DEE2*MTc0NjE1MTY0My4yLjAuMTc0NjE1MTY0My42MC4wLjA.";

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  // Main navigation items grouped by category
  const navGroups = [
    {
      label: "Main",
      items: [
        { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      ]
    },
    {
      label: "Activity",
      items: [
        { name: "Submissions", path: "/dashboard/submissions", icon: FileText }
      ]
    },
    {
      label: "Communication",
      items: [
        { name: "Messages", path: "/dashboard/messages", icon: MessageSquare },
        { name: "Calendar", path: "/dashboard/calendar", icon: Calendar }
      ]
    },
    {
      label: "Documents",
      items: [
        { name: "Documents", path: "/dashboard/documents", icon: FileText }
      ]
    },
    {
      label: "Account",
      items: [
        { name: "Profile", path: "/dashboard/profile", icon: UserRound },
        { name: "Settings", path: "/dashboard/settings", icon: Settings }
      ]
    },
    {
      label: "Resources",
      items: [
        { name: "Help Center", path: "/dashboard/help", icon: LifeBuoy }
      ]
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-100">
        <Sidebar className="bg-white border-r" collapsible="icon">
          <SidebarHeader>
            <h2 className="text-xl font-bold px-4 group-data-[collapsible=icon]:hidden">LinkToLawyers</h2>
          </SidebarHeader>
          <SidebarContent>
            {navGroups.map((group, index) => (
              <React.Fragment key={group.label}>
                {index > 0 && <SidebarSeparator />}
                <SidebarGroup>
                  <SidebarGroupLabel className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {group.label}
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton asChild tooltip={item.name}>
                            <Link to={item.path} className="text-lg py-3">
                              <item.icon size={22} />
                              <span className="text-base ml-1">{item.name}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </React.Fragment>
            ))}
          </SidebarContent>
          <SidebarRail />
        </Sidebar>

        <div className="flex-1">
          {/* Navbar */}
          <header className="bg-white border-b">
            <div className="flex h-14 items-center justify-between px-4">
              <SidebarTrigger />
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={profileImageUrl} alt="User profile" />
                          <AvatarFallback>{userInitial}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-medium">John Doe</span>
                          <span className="text-xs text-muted-foreground">
                            {userRole?.toLowerCase() || 'client'}
                          </span>
                        </div>
                        <ChevronDown size={16} className="text-muted-foreground ml-1" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/profile" className="cursor-pointer">
                        <UserRound className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-4 pt-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
