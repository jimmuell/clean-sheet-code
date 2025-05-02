
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const VerificationPending = () => {
  const navigate = useNavigate();
  
  return (
    <Card className="p-8 text-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Loader className="h-8 w-8 text-primary animate-spin" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Verification Pending</h2>
          <p className="text-muted-foreground">
            Thank you for submitting your information. Our team will review your credentials and verify your attorney status.
          </p>
        </div>
        
        <div className="bg-muted/50 p-4 rounded-md text-sm max-w-md mx-auto mt-4">
          <p>
            This process typically takes 1-2 business days. You will receive an email notification once your account is approved.
          </p>
        </div>
        
        <div className="pt-4">
          <Button onClick={() => navigate("/")} className="mt-2">
            Return to Homepage
          </Button>
        </div>
      </div>
    </Card>
  );
};
