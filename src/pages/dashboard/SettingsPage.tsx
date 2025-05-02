
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Settings, Bell, Shield, Moon, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Toggle, ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SettingsPage = () => {
  // Notifications settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(false);

  // Privacy settings
  const [profileVisibility, setProfileVisibility] = useState<string>("public");
  const [activityStatus, setActivityStatus] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);

  // Appearance settings
  const [fontSize, setFontSize] = useState<number[]>([16]);
  const [theme, setTheme] = useState("light");
  const [compactMode, setCompactMode] = useState(false);

  // Account settings
  const [emailFrequency, setEmailFrequency] = useState<string>("daily");

  // Handle form submission
  const handleSave = () => {
    // In a real app, this would save settings to the database
    console.log("Saving settings...", {
      notifications: {
        email: emailNotifications,
        push: pushNotifications,
        sms: smsNotifications,
        marketing: marketingEmails,
      },
      privacy: {
        profileVisibility,
        activityStatus,
        dataSharing,
      },
      appearance: {
        fontSize: fontSize[0],
        theme,
        compactMode,
      },
      account: {
        emailFrequency,
      }
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
              <Settings className="h-4 w-4 mr-2" /> Account
            </TabsTrigger>
          </TabsList>
        </div>
        
        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch 
                    id="email-notifications" 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                  </div>
                  <Switch 
                    id="push-notifications" 
                    checked={pushNotifications} 
                    onCheckedChange={setPushNotifications} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via text message</p>
                  </div>
                  <Switch 
                    id="sms-notifications" 
                    checked={smsNotifications} 
                    onCheckedChange={setSmsNotifications} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing-emails">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive marketing and promotional emails</p>
                  </div>
                  <Switch 
                    id="marketing-emails" 
                    checked={marketingEmails} 
                    onCheckedChange={setMarketingEmails} 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Privacy Tab */}
        <TabsContent value="privacy">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Profile Visibility</Label>
                  <ToggleGroup 
                    type="single" 
                    value={profileVisibility} 
                    onValueChange={(value) => value && setProfileVisibility(value)}
                    className="justify-start"
                  >
                    <ToggleGroupItem value="public">Public</ToggleGroupItem>
                    <ToggleGroupItem value="contacts">Contacts Only</ToggleGroupItem>
                    <ToggleGroupItem value="private">Private</ToggleGroupItem>
                  </ToggleGroup>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="activity-status">Show Activity Status</Label>
                    <p className="text-sm text-muted-foreground">Let others see when you're active</p>
                  </div>
                  <Switch 
                    id="activity-status" 
                    checked={activityStatus} 
                    onCheckedChange={setActivityStatus} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="data-sharing">Data Sharing</Label>
                    <p className="text-sm text-muted-foreground">Share usage data to help improve our services</p>
                  </div>
                  <Switch 
                    id="data-sharing" 
                    checked={dataSharing} 
                    onCheckedChange={setDataSharing} 
                  />
                </div>

                <Collapsible className="w-full border rounded-lg p-4 space-y-2 mt-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">Advanced Privacy Options</h4>
                    <CollapsibleTrigger className="hover:bg-muted p-1 rounded">
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Configure additional privacy settings like two-factor authentication, 
                      login history, and connected applications.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Configure
                    </Button>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Appearance Tab */}
        <TabsContent value="appearance">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="font-size">Font Size ({fontSize}px)</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge variant="outline" className="cursor-help">Default: 16px</Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>The default font size is 16px</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Slider
                    id="font-size"
                    defaultValue={fontSize}
                    max={24}
                    min={12}
                    step={1}
                    onValueChange={setFontSize}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Theme</Label>
                  <div className="flex gap-2">
                    <Toggle
                      pressed={theme === "light"}
                      onPressedChange={() => setTheme("light")}
                      className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                    >
                      Light
                    </Toggle>
                    <Toggle
                      pressed={theme === "dark"}
                      onPressedChange={() => setTheme("dark")}
                      className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                    >
                      Dark
                    </Toggle>
                    <Toggle
                      pressed={theme === "system"}
                      onPressedChange={() => setTheme("system")}
                      className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                    >
                      System
                    </Toggle>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="compact-mode">Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">Use a more compact layout to fit more content</p>
                  </div>
                  <Switch 
                    id="compact-mode" 
                    checked={compactMode} 
                    onCheckedChange={setCompactMode} 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Account Tab */}
        <TabsContent value="account">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-frequency">Email Digest Frequency</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        {emailFrequency === "daily" ? "Daily" : 
                         emailFrequency === "weekly" ? "Weekly" : 
                         emailFrequency === "monthly" ? "Monthly" : "Never"}
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
                            onClick={() => setEmailFrequency(frequency)}
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
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SettingsPage;
