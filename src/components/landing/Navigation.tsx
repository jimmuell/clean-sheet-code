
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
    <nav className="bg-transparent py-5 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-heading-gradient bg-clip-text text-transparent drop-shadow-sm">LinkToLawyers</div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">How It Works</a>
          <a href="#about" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">About</a>
          <a href="#contact" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">Contact</a>
        </div>
        
        <div className="space-x-4">
          {user ? (
            <Button 
              onClick={handleDashboardClick}
              className="bg-brand-purple hover:bg-brand-purple/90 px-6 shadow-md"
            >
              Dashboard
            </Button>
          ) : (
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate("/auth")}
                className="border-gray-300 hover:bg-gray-50 font-medium"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => navigate("/auth?mode=signup")} 
                className="bg-brand-purple hover:bg-brand-purple/90 flex items-center gap-2 shadow-md font-medium"
              >                
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
