
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SettingsSectionCardProps {
  title: string;
  children: React.ReactNode;
}

const SettingsSectionCard = ({ title, children }: SettingsSectionCardProps) => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsSectionCard;
