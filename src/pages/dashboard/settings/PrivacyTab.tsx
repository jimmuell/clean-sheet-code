
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import SettingsSectionCard from "./SettingsSectionCard";
import ToggleSetting from "./ToggleSetting";

export interface PrivacySettings {
  profileVisibility: string;
  activityStatus: boolean;
  dataSharing: boolean;
}

interface PrivacyTabProps {
  settings: PrivacySettings;
  onChange: (settings: PrivacySettings) => void;
}

const PrivacyTab = ({ settings, onChange }: PrivacyTabProps) => {
  return (
    <SettingsSectionCard title="Privacy Settings">
      <div className="space-y-2">
        <Label>Profile Visibility</Label>
        <ToggleGroup 
          type="single" 
          value={settings.profileVisibility} 
          onValueChange={(value) => value && onChange({ ...settings, profileVisibility: value })}
          className="justify-start"
        >
          <ToggleGroupItem value="public">Public</ToggleGroupItem>
          <ToggleGroupItem value="contacts">Contacts Only</ToggleGroupItem>
          <ToggleGroupItem value="private">Private</ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <ToggleSetting 
        id="activity-status" 
        label="Show Activity Status" 
        description="Let others see when you're active"
        checked={settings.activityStatus} 
        onCheckedChange={(checked) => onChange({ ...settings, activityStatus: checked })} 
      />
      
      <ToggleSetting 
        id="data-sharing" 
        label="Data Sharing" 
        description="Share usage data to help improve our services"
        checked={settings.dataSharing} 
        onCheckedChange={(checked) => onChange({ ...settings, dataSharing: checked })} 
      />

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
    </SettingsSectionCard>
  );
};

export default PrivacyTab;
