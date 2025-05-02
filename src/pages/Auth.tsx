
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [userRole, setUserRole] = useState<"client" | "attorney">("client");
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === "signup") {
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
              role: userRole
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
      } else {
        // Login flow remains mostly the same
        const { error, data } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        // Navigate based on role after successful login
        if (data.user) {
          await navigateBasedOnRole(data.user.id);
        } else {
          navigate("/dashboard"); // Fallback
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
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
          <form onSubmit={handleAuth} className="space-y-4">
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

            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="role">I am a:</Label>
                <RadioGroup
                  defaultValue="client"
                  value={userRole}
                  onValueChange={(value) => setUserRole(value as "client" | "attorney")}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="client" id="client" />
                    <Label htmlFor="client">Client seeking legal assistance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="attorney" id="attorney" />
                    <Label htmlFor="attorney">Attorney providing legal services</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading
                ? "Loading..."
                : mode === "login"
                ? "Sign In"
                : "Create Account"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            {mode === "login" ? (
              <p>
                Don't have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 h-auto"
                  onClick={() => setMode("signup")}
                >
                  Sign up
                </Button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 h-auto"
                  onClick={() => setMode("login")}
                >
                  Sign in
                </Button>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
