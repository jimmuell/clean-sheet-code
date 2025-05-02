import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";
import { useAuth } from "@/auth";

const Auth = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // Check for mode in URL query params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("mode") === "signup") {
      setMode("signup");
    }
  }, [location]);

  // Function to fetch user role and navigate to appropriate dashboard
  const navigateBasedOnRole = async (userId: string) => {
    try {
      const { data: profileData, error: profileError } = await supabase
        .from('profile')
        .select('role')
        .eq('user_id', userId)
        .single();

      if (profileError) {
        console.error("Error fetching user role:", profileError);
        navigate("/dashboard"); // Default route if role can't be determined
        return;
      }

      const role = profileData?.role?.toLowerCase();
      
      // Navigate based on role
      switch(role) {
        case "attorney":
          navigate("/dashboard/attorney");
          break;
        case "client":
          navigate("/dashboard/client");
          break;
        case "admin":
          navigate("/dashboard/admin");
          break;
        default:
          navigate("/dashboard"); // Default dashboard
      }
    } catch (err) {
      console.error("Error during role-based navigation:", err);
      navigate("/dashboard"); // Default route if error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{mode === "login" ? "Welcome Back" : "Create Account"}</CardTitle>
          <CardDescription>
            {mode === "login"
              ? "Enter your credentials to access your account"
              : "Sign up for a new account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {mode === "login" ? (
            <LoginForm
              navigateBasedOnRole={navigateBasedOnRole}
              onSwitchToSignup={() => setMode("signup")}
            />
          ) : (
            <SignupForm
              navigateBasedOnRole={navigateBasedOnRole}
              onSwitchToLogin={() => setMode("login")}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
