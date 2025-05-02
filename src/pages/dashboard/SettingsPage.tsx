
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Shield, Moon, Settings as SettingsIcon, Save } from "lucide-react";
import { 
  NotificationsTab,
  PrivacyTab,
  AppearanceTab,
  AccountTab,
  NotificationSettings,
  PrivacySettings,
  AppearanceSettings,
  AccountSettings
} from "./settings";

const SettingsPage = () => {
  // Notifications settings
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    email: true,
    push: true,
    sms: false,
    marketing: false
  });

  // Privacy settings
  const [privacySettings, setPrivacySettings] = useState<PrivacySettings>({
    profileVisibility: "public",
    activityStatus: true,
    dataSharing: false
  });

  // Appearance settings
  const [appearanceSettings, setAppearanceSettings] = useState<AppearanceSettings>({
    fontSize: [16],
    theme: "light",
    compactMode: false
  });

  // Account settings
  const [accountSettings, setAccountSettings] = useState<AccountSettings>({
    emailFrequency: "daily"
  });

  // Handle form submission
  const handleSave = () => {
    // In a real app, this would save settings to the database
    console.log("Saving settings...", {
      notifications: notificationSettings,
      privacy: privacySettings,
      appearance: appearanceSettings,
      account: accountSettings
    });
    
    // Show a success message or toast notification in a real app
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="notifications" className="space-y-4">
        <div className="border-b mb-4">
          <TabsList className="bg-transparent mb-0 -ml-2 justify-start">
            <TabsTrigger value="notifications" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              <Bell className="h-4 w-4 mr-2" /> Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              <Shield className="h-4 w-4 mr-2" /> Privacy
            </TabsTrigger>
            <TabsTrigger value="appearance" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              <Moon className="h-4 w-4 mr-2" /> Appearance
            </TabsTrigger>
            <TabsTrigger value="account" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              <SettingsIcon className="h-4 w-4 mr-2" /> Account
            </TabsTrigger>
          </TabsList>
        </div>
        
        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <NotificationsTab 
            settings={notificationSettings} 
            onChange={setNotificationSettings} 
          />
        </TabsContent>
        
        {/* Privacy Tab */}
        <TabsContent value="privacy">
          <PrivacyTab 
            settings={privacySettings} 
            onChange={setPrivacySettings} 
          />
        </TabsContent>
        
        {/* Appearance Tab */}
        <TabsContent value="appearance">
          <AppearanceTab 
            settings={appearanceSettings} 
            onChange={setAppearanceSettings} 
          />
        </TabsContent>
        
        {/* Account Tab */}
        <TabsContent value="account">
          <AccountTab 
            settings={accountSettings} 
            onChange={setAccountSettings} 
          />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SettingsPage;
