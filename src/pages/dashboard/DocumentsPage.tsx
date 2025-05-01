
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DocumentsPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Documents</h1>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Your Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Access and manage all your legal documents in one secure place.
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default DocumentsPage;
