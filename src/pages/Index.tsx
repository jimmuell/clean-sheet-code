
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        {user ? (
          <div className="space-y-4">
            <p className="text-xl text-gray-600">Logged in as: {user.email}</p>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-xl text-gray-600">Please sign in to continue</p>
            <Button onClick={() => navigate("/auth")}>Sign In</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
