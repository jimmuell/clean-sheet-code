
import { useAuth } from "@/components/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
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
  Blocks,
  PanelLeft,
  BarChart3,
  FormInput
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
  const { user } = useAuth();
  const navigate = useNavigate();
  const userInitial = user?.email?.[0].toUpperCase() || "U";

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
        { name: "Submissions", path: "/dashboard/submissions", icon: FileText }
      ]
    },
    {
      label: "Communication",
      items: [
        { name: "Messages", path: "/dashboard/messages", icon: MessageSquare }
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
                    <Button variant="ghost" className="h-8 w-8 rounded-full">
                      <Avatar>
                        <AvatarFallback>{userInitial}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{user?.email}</p>
                      </div>
                    </div>
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
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
