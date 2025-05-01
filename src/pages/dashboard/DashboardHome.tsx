
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

type UserRole = "client" | "attorney" | "admin";

const DashboardHome = () => {
  const { user } = useAuth();
  // This would normally come from user data in a real app
  // For now we'll just hardcode it for demonstration
  const userRole = "client" as UserRole;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {userRole === "client" && (
              <p className="text-muted-foreground">You have no recent activity.</p>
            )}
            
            {userRole === "attorney" && (
              <p className="text-muted-foreground">You have 3 new case reviews pending.</p>
            )}

            {userRole === "admin" && (
              <p className="text-muted-foreground">5 new attorneys waiting for approval.</p>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            {userRole === "client" && (
              <p className="text-muted-foreground">No upcoming consultations scheduled.</p>
            )}
            
            {userRole === "attorney" && (
              <p className="text-muted-foreground">Consultation tomorrow at 2:00 PM.</p>
            )}

            {userRole === "admin" && (
              <p className="text-muted-foreground">Weekly team meeting on Friday.</p>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-sm md:col-span-2 xl:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Common tasks based on your role.</p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Welcome to your dashboard!</AlertTitle>
        <AlertDescription>
          This is where you'll find all your important information and updates.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default DashboardHome;
