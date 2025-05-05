
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { UsersIcon, ScaleIcon, BarChartIcon } from "lucide-react";
import { useAuth } from "@/auth";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 bg-heading-gradient bg-clip-text text-transparent">Admin Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-6">
        <Card className="shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand-purple">
              <UsersIcon className="h-5 w-5" />
              User Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">152</p>
            <p className="text-muted-foreground">Total registered users</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand-purple">
              <ScaleIcon className="h-5 w-5" />
              Attorney Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">7</p>
            <p className="text-muted-foreground">Attorneys awaiting verification</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand-purple">
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

      <Alert className="bg-brand-blue/5 border border-brand-blue/20">
        <AlertTitle className="text-brand-blue font-medium">Welcome to the Admin Dashboard!</AlertTitle>
        <AlertDescription>
          Manage users, review attorney applications, and monitor platform performance from this central hub.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default AdminDashboard;
