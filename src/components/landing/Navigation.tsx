
import { useAuth } from "@/auth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  user: any;
  userRole: string | null;
}

export const Navigation = ({ user, userRole }: NavigationProps) => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    if (userRole) {
      switch (userRole.toLowerCase()) {
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
          navigate("/dashboard");
      }
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <nav className="bg-white border-b py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">LinkToLawyers</div>
        <div className="space-x-4">
          {user ? (
            <Button onClick={handleDashboardClick}>
              Dashboard
            </Button>
          ) : (
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate("/auth")}>
                Sign In
              </Button>
              <Button onClick={() => navigate("/auth?mode=signup")} className="flex items-center gap-2">                
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
