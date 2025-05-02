
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import SettingsSectionCard from "./SettingsSectionCard";

export interface AccountSettings {
  emailFrequency: string;
}

interface AccountTabProps {
  settings: AccountSettings;
  onChange: (settings: AccountSettings) => void;
}

const AccountTab = ({ settings, onChange }: AccountTabProps) => {
  return (
    <SettingsSectionCard title="Account Settings">
      <div className="space-y-2">
        <Label htmlFor="email-frequency">Email Digest Frequency</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {settings.emailFrequency === "daily" ? "Daily" : 
               settings.emailFrequency === "weekly" ? "Weekly" : 
               settings.emailFrequency === "monthly" ? "Monthly" : "Never"}
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <div className="flex flex-col">
              {["daily", "weekly", "monthly", "never"].map((frequency) => (
                <Button
                  key={frequency}
                  variant="ghost"
                  className="justify-start font-normal"
                  onClick={() => onChange({ ...settings, emailFrequency: frequency })}
                >
                  {frequency.charAt(0).toUpperCase() + frequency.slice(1)}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="change-password">Change Password</Label>
        <div className="flex flex-col gap-2">
          <Input type="password" id="current-password" placeholder="Current password" />
          <Input type="password" id="new-password" placeholder="New password" />
          <Input type="password" id="confirm-password" placeholder="Confirm new password" />
          <Button size="sm" className="self-start mt-2">Update Password</Button>
        </div>
      </div>

      <div className="pt-6 border-t">
        <Button variant="destructive">Delete Account</Button>
      </div>
    </SettingsSectionCard>
  );
};

export default AccountTab;
