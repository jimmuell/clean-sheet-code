
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MessagesPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Your Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Communicate securely with attorneys and clients through our messaging system.
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default MessagesPage;
