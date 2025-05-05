
import React from "react";
import { Link } from "react-router-dom";
import { 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";

type NavItem = {
  name: string;
  path: string;
  icon: LucideIcon;
};

type NavigationGroupProps = {
  label: string;
  items: NavItem[];
};

const NavigationGroup: React.FC<NavigationGroupProps> = ({ label, items }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs font-medium text-brand-menuLabel uppercase tracking-wider px-4">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
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
  );
};

export default NavigationGroup;
