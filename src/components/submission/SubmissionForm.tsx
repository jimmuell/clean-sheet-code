
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PersonalInfoStep } from "./PersonalInfoStep";
import { CaseDetailsStep } from "./CaseDetailsStep";
import { ReviewStep } from "./ReviewStep";
import { useSubmissionForm } from "./useSubmissionForm";

const SubmissionForm = () => {
  const navigate = useNavigate();
  const { step, setStep, formData, updateFormData, handleSubmit } = useSubmissionForm();

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
      handleSubmit(navigate);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <CaseDetailsStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
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
        {renderStepContent()}
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
