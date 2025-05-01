
import { useAuth } from "@/components/AuthProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardHome = () => {
  const { user } = useAuth();
  
  // In a real app, you'd fetch the user's role from your database
  // For now, we'll simulate this with a mock role
  const userRole = "client"; // This would be dynamically determined

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>{userRole === "admin" ? "Admin" : userRole === "attorney" ? "Attorney" : "Client"} Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Welcome back! Here you can manage your {userRole === "admin" ? "administrative tasks" : userRole === "attorney" ? "cases and client communications" : "legal submissions and attorney communications"}.
          </p>
          
          {userRole === "admin" && (
            <div className="mt-4">
              <p>Admin-specific content would display here.</p>
            </div>
          )}
          
          {userRole === "attorney" && (
            <div className="mt-4">
              <p>Attorney-specific content would display here.</p>
            </div>
          )}
          
          {userRole === "client" && (
            <div className="mt-4">
              <p>Client-specific content would display here.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardHome;
