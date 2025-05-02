
import { useState } from "react";
import SettingsSectionCard from "./SettingsSectionCard";
import ToggleSetting from "./ToggleSetting";

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  marketing: boolean;
}

interface NotificationsTabProps {
  settings: NotificationSettings;
  onChange: (settings: NotificationSettings) => void;
}

const NotificationsTab = ({ settings, onChange }: NotificationsTabProps) => {
  return (
    <SettingsSectionCard title="Notification Preferences">
      <ToggleSetting 
        id="email-notifications" 
        label="Email Notifications" 
        description="Receive notifications via email"
        checked={settings.email} 
        onCheckedChange={(checked) => onChange({ ...settings, email: checked })} 
      />
      
      <ToggleSetting 
        id="push-notifications" 
        label="Push Notifications" 
        description="Receive notifications on your device"
        checked={settings.push} 
        onCheckedChange={(checked) => onChange({ ...settings, push: checked })} 
      />
      
      <ToggleSetting 
        id="sms-notifications" 
        label="SMS Notifications" 
        description="Receive notifications via text message"
        checked={settings.sms} 
        onCheckedChange={(checked) => onChange({ ...settings, sms: checked })} 
      />
      
      <ToggleSetting 
        id="marketing-emails" 
        label="Marketing Emails" 
        description="Receive marketing and promotional emails"
        checked={settings.marketing} 
        onCheckedChange={(checked) => onChange({ ...settings, marketing: checked })} 
      />
    </SettingsSectionCard>
  );
};

export default NotificationsTab;
