
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { UsersIcon, ScaleIcon, BarChartIcon } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UsersIcon className="h-5 w-5" />
              User Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">152</p>
            <p className="text-muted-foreground">Total registered users</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ScaleIcon className="h-5 w-5" />
              Attorney Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">7</p>
            <p className="text-muted-foreground">Attorneys awaiting verification</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChartIcon className="h-5 w-5" />
              Platform Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-1">2,547 sessions</p>
            <p className="text-muted-foreground">15% increase from last month</p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <AlertTitle>Welcome to the Admin Dashboard!</AlertTitle>
        <AlertDescription>
          Manage users, review attorney applications, and monitor platform performance from this central hub.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default AdminDashboard;
