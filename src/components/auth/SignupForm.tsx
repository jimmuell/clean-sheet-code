
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { RoleSelector } from "./RoleSelector";

interface SignupFormProps {
  navigateBasedOnRole: (userId: string) => Promise<void>;
  onSwitchToLogin: () => void;
}

export const SignupForm = ({ navigateBasedOnRole, onSwitchToLogin }: SignupFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userRole, setUserRole] = useState<"client" | "attorney">("client");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // For signup, we need to create the user and add their role
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
          // If user already exists, try to sign in instead
          toast.info("This email is already registered. Trying to sign in...");
          
          const { error: signInError, data: signInData } = await supabase.auth.signInWithPassword({
            email,
            password
          });
          
          if (signInError) {
            // If sign in fails, show the original error
            throw signUpError;
          } else {
            toast.success("Signed in successfully!");
            // Navigate based on role after successful login
            if (signInData.user) {
              await navigateBasedOnRole(signInData.user.id);
            } else {
              navigate("/dashboard"); // Fallback
            }
            return;
          }
        } else {
          // For other errors, just throw the original error
          throw signUpError;
        }
      }

      // Create profile entry with role
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profile')
          .insert([{ 
            user_id: data.user.id,
            role: userRole,
            email: email
          }]);
          
        if (profileError) throw profileError;
        
        toast.success("Account created successfully!");
        
        // If the user is a client, redirect to the new submission form
        if (userRole === "client") {
          navigate("/dashboard/new-submission");
        } else {
          // Otherwise navigate based on role
          await navigateBasedOnRole(data.user.id);
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-4">
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
        {isLoading ? "Loading..." : "Create Account"}
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
};
