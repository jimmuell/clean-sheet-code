
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
export const navGroups = [
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
