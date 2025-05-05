
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Lock } from "lucide-react";

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
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-brand-purple" />
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-gray-300 focus-visible:ring-brand-purple"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-brand-purple" />
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-gray-300 focus-visible:ring-brand-purple"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-brand-purple hover:bg-brand-purple/90 shadow-md transition-all"
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>

      <div className="mt-4 text-center text-sm">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Button
            variant="link"
            className="p-0 h-auto text-brand-purple font-medium"
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
