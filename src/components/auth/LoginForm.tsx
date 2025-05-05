
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface LoginFormProps {
  navigateBasedOnRole: (userId: string) => Promise<void>;
  onSwitchToSignup: () => void;
}

export const LoginForm = ({ navigateBasedOnRole, onSwitchToSignup }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error("Login error:", error);
        toast.error(error.message || "Failed to sign in");
        return;
      }
      
      // Navigate based on role after successful login
      if (data.user) {
        try {
          await navigateBasedOnRole(data.user.id);
        } catch (navError) {
          console.error("Navigation error:", navError);
          // If role-based navigation fails, go to default dashboard
          navigate("/dashboard");
        }
      } else {
        navigate("/dashboard"); // Fallback
      }
    } catch (error) {
      console.error("Unexpected login error:", error);
      toast.error("An unexpected error occurred during sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
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

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>

      <div className="mt-4 text-center text-sm">
        <p>
          Don't have an account?{" "}
          <Button
            variant="link"
            className="p-0 h-auto"
            onClick={onSwitchToSignup}
            type="button"
          >
            Sign up
          </Button>
        </p>
      </div>
    </form>
  );
};
