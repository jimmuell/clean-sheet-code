
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RoleSelectorProps {
  userRole: "client" | "attorney" | "admin";
  setUserRole: (role: "client" | "attorney" | "admin") => void;
}

export const RoleSelector = ({ userRole, setUserRole }: RoleSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="role">I am a:</Label>
      <RadioGroup
        defaultValue="client"
        value={userRole}
        onValueChange={(value) => setUserRole(value as "client" | "attorney" | "admin")}
        className="flex flex-col space-y-1"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="client" id="client" />
          <Label htmlFor="client">Client seeking legal assistance</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="attorney" id="attorney" />
          <Label htmlFor="attorney">Attorney providing legal services</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
