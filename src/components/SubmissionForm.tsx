
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const SubmissionForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    caseType: "",
    description: "",
    urgency: "medium",
  });

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        toast.error("Please fill in all required fields");
        return;
      }
    }
    
    if (step === 2) {
      if (!formData.caseType || !formData.description) {
        toast.error("Please fill in all required fields");
        return;
      }
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // In a real app, you would submit the form data to your backend
    console.log("Form submitted:", formData);
    toast.success("Your submission has been received!");
    
    // Redirect to authentication or dashboard based on authentication status
    navigate("/auth");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-sm">
      <CardHeader>
        <CardTitle>Legal Case Submission</CardTitle>
        <CardDescription>
          Step {step} of 3: {step === 1 ? "Personal Information" : step === 2 ? "Case Details" : "Review & Submit"}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => updateFormData("fullName", e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
              />
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="caseType">Case Type</Label>
              <Select 
                value={formData.caseType}
                onValueChange={(value) => updateFormData("caseType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select case type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="family">Family Law</SelectItem>
                  <SelectItem value="criminal">Criminal Defense</SelectItem>
                  <SelectItem value="personal_injury">Personal Injury</SelectItem>
                  <SelectItem value="estate">Estate Planning</SelectItem>
                  <SelectItem value="business">Business Law</SelectItem>
                  <SelectItem value="immigration">Immigration</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Case Description</Label>
              <Textarea
                id="description"
                placeholder="Please describe your legal issue"
                rows={4}
                value={formData.description}
                onChange={(e) => updateFormData("description", e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency Level</Label>
              <Select 
                value={formData.urgency}
                onValueChange={(value) => updateFormData("urgency", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - No immediate deadline</SelectItem>
                  <SelectItem value="medium">Medium - Needed within weeks</SelectItem>
                  <SelectItem value="high">High - Needed within days</SelectItem>
                  <SelectItem value="urgent">Urgent - Immediate assistance required</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Review Your Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                <p>{formData.fullName}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p>{formData.email}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                <p>{formData.phone}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-muted-foreground">Case Type</p>
                <p>{formData.caseType.replace('_', ' ')}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-muted-foreground">Urgency</p>
                <p>{formData.urgency}</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground">Case Description</p>
              <p>{formData.description}</p>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handleBack}
          disabled={step === 1}
        >
          Back
        </Button>
        
        <Button onClick={handleNext}>
          {step < 3 ? "Next" : "Submit"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubmissionForm;
