
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import SettingsSectionCard from "./SettingsSectionCard";
import ToggleSetting from "./ToggleSetting";

export interface AppearanceSettings {
  fontSize: number[];
  theme: string;
  compactMode: boolean;
}

interface AppearanceTabProps {
  settings: AppearanceSettings;
  onChange: (settings: AppearanceSettings) => void;
}

const AppearanceTab = ({ settings, onChange }: AppearanceTabProps) => {
  return (
    <SettingsSectionCard title="Appearance Settings">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="font-size">Font Size ({settings.fontSize[0]}px)</Label>
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
          value={settings.fontSize}
          max={24}
          min={12}
          step={1}
          onValueChange={(value) => onChange({ ...settings, fontSize: value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Theme</Label>
        <div className="flex gap-2">
          <Toggle
            pressed={settings.theme === "light"}
            onPressedChange={() => onChange({ ...settings, theme: "light" })}
            className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            Light
          </Toggle>
          <Toggle
            pressed={settings.theme === "dark"}
            onPressedChange={() => onChange({ ...settings, theme: "dark" })}
            className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            Dark
          </Toggle>
          <Toggle
            pressed={settings.theme === "system"}
            onPressedChange={() => onChange({ ...settings, theme: "system" })}
            className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            System
          </Toggle>
        </div>
      </div>
      
      <ToggleSetting 
        id="compact-mode" 
        label="Compact Mode" 
        description="Use a more compact layout to fit more content"
        checked={settings.compactMode} 
        onCheckedChange={(checked) => onChange({ ...settings, compactMode: checked })} 
      />
    </SettingsSectionCard>
  );
};

export default AppearanceTab;
