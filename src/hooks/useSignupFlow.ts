import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Define the signup steps
export type SignupStep = "credentials" | "verification" | "pending";

export interface UseSignupFlowProps {
  navigateBasedOnRole: (userId: string) => Promise<void>;
}

export const useSignupFlow = ({ navigateBasedOnRole }: UseSignupFlowProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userRole, setUserRole] = useState<"client" | "attorney" | "admin">("client");
  const [currentStep, setCurrentStep] = useState<SignupStep>("credentials");
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  // Handle role change - redirect clients to the submission form
  const handleRoleChange = (role: "client" | "attorney" | "admin") => {
    setUserRole(role);
    
    if (role === "client") {
      // Redirect to the landing page with the form showing
      navigate("/?showForm=true");
    }
  };

  const handleInitialSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // If client role is selected, redirect to the multi-step form
    if (userRole === "client") {
      navigate("/?showForm=true");
      return;
    }
    
    setIsLoading(true);

    try {
      // For attorney signup, we'll create the account but not set the role yet
      if (userRole === "attorney") {
        const { error: signUpError, data } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              role: "pending_attorney" // Mark as pending initially
            }
          }
        });
        
        if (signUpError) {
          if (signUpError.message.includes("User already registered")) {
            toast.info("This email is already registered. Please sign in instead.");
          } else {
            throw signUpError;
          }
        } else if (data.user) {
          // Store the user ID for the verification step
          setUserId(data.user.id);
          // Move to the verification step
          setCurrentStep("verification");
        }
        
        setIsLoading(false);
        return;
      }
      
      // For client signup, this should never be reached now because we redirect earlier,
      // but keeping as a fallback
      navigate("/?showForm=true");
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerificationSubmit = async () => {
    // Here we would actually submit the verification data
    // For now, just show the pending screen
    setCurrentStep("pending");
    
    // In a real implementation, we would:
    // 1. Upload documents to storage
    // 2. Create verification record in database
    // 3. Update user role to pending_attorney if not already done
    // 4. Notify admins about new attorney signup
    
    toast.success("Verification information submitted successfully!");
  };

  const handleCancelVerification = async () => {
    // In a real implementation we might:
    // 1. Delete the partially created account
    // 2. Or mark it as abandoned
    
    setCurrentStep("credentials");
    toast.info("Verification cancelled. You can try again or sign up as a client.");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    userRole,
    handleRoleChange,
    currentStep,
    userId,
    handleInitialSignup,
    handleVerificationSubmit,
    handleCancelVerification
  };
};
