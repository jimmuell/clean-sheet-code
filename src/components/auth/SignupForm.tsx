
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { RoleSelector } from "./RoleSelector";
import { AttorneyVerificationForm } from "./AttorneyVerificationForm";
import { VerificationPending } from "./VerificationPending";

interface SignupFormProps {
  navigateBasedOnRole: (userId: string) => Promise<void>;
  onSwitchToLogin: () => void;
}

// Define the signup steps
type SignupStep = "credentials" | "verification" | "pending";

export const SignupForm = ({ navigateBasedOnRole, onSwitchToLogin }: SignupFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userRole, setUserRole] = useState<"client" | "attorney" | "admin">("client");
  const [currentStep, setCurrentStep] = useState<SignupStep>("credentials");
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInitialSignup = async (e: React.FormEvent) => {
    e.preventDefault();
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
      
      // For client signup, proceed with regular flow
      const { error: signUpError, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role: userRole
          }
        }
      });
      
      // Handle the case where the user is already registered
      if (signUpError) {
        if (signUpError.message.includes("User already registered")) {
          toast.info("This email is already registered. Trying to sign in...");
          
          const { error: signInError, data: signInData } = await supabase.auth.signInWithPassword({
            email,
            password
          });
          
          if (signInError) {
            throw signUpError;
          } else {
            toast.success("Signed in successfully!");
            if (signInData.user) {
              await navigateBasedOnRole(signInData.user.id);
            } else {
              navigate("/dashboard");
            }
            return;
          }
        } else {
          throw signUpError;
        }
      }

      // Create profile entry with role
      if (data.user) {
        try {
          const { error: profileError } = await supabase
            .from('profile')
            .insert([{ 
              user_id: data.user.id,
              role: userRole,
              email: email
            }]);
            
          if (profileError) {
            console.error("Profile creation error:", profileError);
            toast.warning("Account created, but profile setup encountered an issue. Some features may be limited.");
          } else {
            toast.success("Account created successfully!");
          }
          
          // If the user is a client, redirect to the new submission form
          if (userRole === "client") {
            navigate("/dashboard/new-submission");
          } else {
            await navigateBasedOnRole(data.user.id);
          }
        } catch (profileSetupError) {
          console.error("Profile setup failed:", profileSetupError);
          toast.warning("Account created, but profile setup failed. Please contact support.");
          navigate("/dashboard");
        }
      }
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

  // Render the appropriate step
  const renderStep = () => {
    switch (currentStep) {
      case "verification":
        return (
          <AttorneyVerificationForm
            onSubmit={handleVerificationSubmit}
            onCancel={handleCancelVerification}
          />
        );
      case "pending":
        return <VerificationPending />;
      case "credentials":
      default:
        return (
          <form onSubmit={handleInitialSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <RoleSelector userRole={userRole} setUserRole={setUserRole} />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading..." : userRole === "attorney" ? "Continue to Verification" : "Create Account"}
            </Button>

            <div className="mt-4 text-center text-sm">
              <p>
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 h-auto"
                  onClick={onSwitchToLogin}
                  type="button"
                >
                  Sign in
                </Button>
              </p>
            </div>
          </form>
        );
    }
  };

  return <div className="space-y-4">{renderStep()}</div>;
};
