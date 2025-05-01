
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProfilePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Manage your personal information and account details.
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default ProfilePage;
