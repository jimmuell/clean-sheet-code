
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Scale } from "lucide-react";

interface RoleSelectorProps {
  userRole: "client" | "attorney" | "admin";
  setUserRole: (role: "client" | "attorney" | "admin") => void;
}

export const RoleSelector = ({ userRole, setUserRole }: RoleSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="role" className="font-medium">I am a:</Label>
      <RadioGroup
        defaultValue="client"
        value={userRole}
        onValueChange={(value) => setUserRole(value as "client" | "attorney" | "admin")}
        className="flex flex-col space-y-2"
      >
        <div className="flex items-center space-x-2 bg-white border border-gray-200 p-3 rounded-md hover:border-brand-purple/50 transition-colors">
          <RadioGroupItem 
            value="client" 
            id="client"
            className="text-brand-purple border-gray-300" 
          />
          <Label htmlFor="client" className="flex items-center gap-2 cursor-pointer">
            <User className="h-4 w-4 text-brand-purple" />
            Client seeking legal assistance
          </Label>
        </div>
        <div className="flex items-center space-x-2 bg-white border border-gray-200 p-3 rounded-md hover:border-brand-purple/50 transition-colors">
          <RadioGroupItem 
            value="attorney" 
            id="attorney"
            className="text-brand-purple border-gray-300" 
          />
          <Label htmlFor="attorney" className="flex items-center gap-2 cursor-pointer">
            <Scale className="h-4 w-4 text-brand-purple" />
            Attorney providing legal services
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};
