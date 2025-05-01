
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SettingsPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Configure your account preferences and notification settings.
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default SettingsPage;
