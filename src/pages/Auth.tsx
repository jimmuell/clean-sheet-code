
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";
import { AuthContainer } from "@/components/auth/AuthContainer";
import { useRoleNavigation } from "@/hooks/useRoleNavigation";
import { useAuth } from "@/auth";
import { ArrowLeft } from "lucide-react";

const Auth = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const location = useLocation();
  const { user } = useAuth();
  const { navigateBasedOnRole } = useRoleNavigation();

  // Check for mode in URL query params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("mode") === "signup") {
      setMode("signup");
    }
  }, [location]);

  return (
    <div className="relative">
      <Link to="/" className="absolute top-4 left-4 flex items-center gap-1 text-gray-600 hover:text-brand-purple transition-colors z-20 p-2">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to homepage</span>
      </Link>
    
      <AuthContainer
        title={mode === "login" ? "Welcome Back" : "Create Account"}
        description={
          mode === "login"
            ? "Enter your credentials to access your account"
            : "Sign up for a new account"
        }
      >
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
      </AuthContainer>
    </div>
  );
};

export default Auth;
