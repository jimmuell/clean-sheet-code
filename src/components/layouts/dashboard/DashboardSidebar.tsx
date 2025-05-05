
import React from "react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarRail,
  SidebarSeparator
} from "@/components/ui/sidebar";
import NavigationGroup from "./NavigationGroup";
import { 
  LayoutDashboard, 
  FileText,
  MessageSquare, 
  UserRound, 
  Settings, 
  LifeBuoy,
  Calendar
} from "lucide-react";

// Navigation groups data
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

const DashboardSidebar = () => {
  return (
    <Sidebar className="bg-gradient-to-b from-white to-gray-50 border-r border-purple-100 shadow-sm" collapsible="icon">
      <SidebarHeader className="bg-gradient-to-r from-brand-purple/10 to-brand-blue/5 border-b border-purple-100">
        <h2 className="text-xl font-bold px-4 bg-heading-gradient bg-clip-text text-transparent group-data-[collapsible=icon]:hidden">LinkToLawyers</h2>
      </SidebarHeader>
      <SidebarContent className="scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
        {navGroups.map((group, index) => (
          <React.Fragment key={group.label}>
            {index > 0 && <SidebarSeparator className="bg-purple-100/50" />}
            <NavigationGroup label={group.label} items={group.items} />
          </React.Fragment>
        ))}
      </SidebarContent>
      <SidebarRail className="after:bg-brand-purple/20 hover:after:bg-brand-purple/40" />
    </Sidebar>
  );
};

export default DashboardSidebar;
