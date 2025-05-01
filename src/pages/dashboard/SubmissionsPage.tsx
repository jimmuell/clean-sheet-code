
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SubmissionsPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Submissions</h1>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Legal Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Manage all your legal submissions here. Track their status and updates.
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default SubmissionsPage;
