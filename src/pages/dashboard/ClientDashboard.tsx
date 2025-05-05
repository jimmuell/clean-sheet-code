
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileTextIcon, MessageSquareIcon, ClockIcon, CalendarIcon } from "lucide-react";
import { useAuth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ClientDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 bg-heading-gradient bg-clip-text text-transparent">Client Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-6">
        <Card className="shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand-purple">
              <FileTextIcon className="h-5 w-5" />
              Your Cases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">2</p>
            <p className="text-muted-foreground">Active cases being handled</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand-purple">
              <MessageSquareIcon className="h-5 w-5" />
              Messages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">4</p>
            <p className="text-muted-foreground">Unread messages from your attorneys</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand-purple">
              <ClockIcon className="h-5 w-5" />
              Next Appointment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold mb-1">May 5, 2025</p>
            <p className="text-muted-foreground mb-3">10:00 AM with John Smith</p>
            <Link to="/dashboard/calendar">
              <Button variant="outline" size="sm" className="w-full hover:bg-brand-purple/10 hover:text-brand-purple">
                <CalendarIcon className="h-4 w-4 mr-2" /> View Calendar
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-brand-purple">
              <CalendarIcon className="h-5 w-5" />
              Schedule Consultation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">Request an appointment with an attorney</p>
            <Link to="/dashboard/calendar">
              <Button variant="default" size="sm" className="w-full bg-brand-purple hover:bg-brand-purple/90">
                Request Appointment
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Alert className="bg-brand-blue/5 border border-brand-blue/20">
        <AlertTitle className="text-brand-blue font-medium">Welcome to your Client Dashboard!</AlertTitle>
        <AlertDescription>
          Track your legal cases, communicate with your attorneys, and manage your appointments all in one place.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default ClientDashboard;
