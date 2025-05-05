
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
  DropdownMenuLabel,
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
      label: "MAIN",
      items: [
        { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      ]
    },
    {
      label: "ACTIVITY",
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
      <div className="min-h-screen flex w-full bg-gradient-to-b from-white to-gray-50">
        <Sidebar className="bg-gradient-to-b from-white to-gray-50 border-r border-purple-100 shadow-sm" collapsible="icon">
          <SidebarHeader className="bg-gradient-to-r from-brand-purple/10 to-brand-blue/5 border-b border-purple-100">
            <h2 className="text-xl font-bold px-4 bg-heading-gradient bg-clip-text text-transparent group-data-[collapsible=icon]:hidden">LinkToLawyers</h2>
          </SidebarHeader>
          <SidebarContent className="scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
            {navGroups.map((group, index) => (
              <React.Fragment key={group.label}>
                {index > 0 && <SidebarSeparator className="bg-purple-100/50" />}
                <SidebarGroup>
                  <SidebarGroupLabel className="text-xs font-medium text-brand-menuLabel uppercase tracking-wider px-4">
                    {group.label}
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton 
                            asChild 
                            tooltip={item.name}
                            className="hover:bg-brand-purple/10 data-[active=true]:bg-brand-purple/15 data-[active=true]:text-brand-purple"
                          >
                            <Link to={item.path} className="text-lg py-3 hover:text-brand-purple transition-colors">
                              <item.icon className="text-brand-purple/70" />
                              <span className="text-base ml-1 font-medium">{item.name}</span>
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
          <SidebarRail className="after:bg-brand-purple/20 hover:after:bg-brand-purple/40" />
        </Sidebar>

        <div className="flex-1">
          {/* Navbar */}
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
