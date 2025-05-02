
import { useState } from "react";
import { toast } from "sonner";
import { NavigateFunction } from "react-router-dom";

export interface SubmissionFormData {
  fullName: string;
  email: string;
  phone: string;
  caseType: string;
  description: string;
  urgency: string;
}

export const useSubmissionForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SubmissionFormData>({
    fullName: "",
    email: "",
    phone: "",
    caseType: "",
    description: "",
    urgency: "medium",
  });

  const updateFormData = (field: keyof SubmissionFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (navigate: NavigateFunction) => {
    // In a real app, you would submit the form data to your backend
    console.log("Form submitted:", formData);
    toast.success("Your submission has been received!");
    
    // Redirect to authentication or dashboard based on authentication status
    navigate("/auth");
  };

  return {
    step,
    setStep,
    formData,
    updateFormData,
    handleSubmit
  };
};
