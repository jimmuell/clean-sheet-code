
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileTextIcon, MessageSquareIcon, ClockIcon } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

const ClientDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Client Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileTextIcon className="h-5 w-5" />
              Your Cases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">2</p>
            <p className="text-muted-foreground">Active cases being handled</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquareIcon className="h-5 w-5" />
              Messages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">4</p>
            <p className="text-muted-foreground">Unread messages from your attorneys</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5" />
              Next Appointment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-1">May 5, 2025</p>
            <p className="text-muted-foreground">10:00 AM with John Smith</p>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <AlertTitle>Welcome to your Client Dashboard!</AlertTitle>
        <AlertDescription>
          Track your legal cases, communicate with your attorneys, and manage your appointments all in one place.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default ClientDashboard;
