
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BriefcaseIcon, UsersIcon, CalendarIcon } from "lucide-react";
import { useAuth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AttorneyDashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Attorney Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BriefcaseIcon className="h-5 w-5" />
              Current Cases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">12</p>
            <p className="text-muted-foreground">Active cases requiring attention</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UsersIcon className="h-5 w-5" />
              Client Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">5</p>
            <p className="text-muted-foreground">New client requests awaiting review</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              Upcoming Consultations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-2">3</p>
            <p className="text-muted-foreground mb-3">Scheduled for this week</p>
            <Link to="/dashboard/calendar">
              <Button variant="outline" size="sm" className="w-full">
                <CalendarIcon className="h-4 w-4 mr-2" /> Manage Calendar
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <AlertTitle>Welcome to your Attorney Dashboard!</AlertTitle>
        <AlertDescription>
          Here you can manage your cases, review client requests, and track your upcoming consultations.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default AttorneyDashboard;
