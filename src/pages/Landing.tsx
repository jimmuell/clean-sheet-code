
import { useAuth } from "@/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Hero, Features, Footer, Navigation, FormSection } from "@/components/landing";

const Landing = () => {
  const { user, userRole } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);

  // Effect to check for showForm query parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("showForm") === "true") {
      setShowForm(true);
    }
  }, [location]);

  // Effect to redirect authenticated users to their role-specific dashboard
  useEffect(() => {
    if (user && userRole) {
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
          navigate("/dashboard"); // Default dashboard if role is unknown
      }
    }
  }, [user, userRole, navigate]);

  const handleGetStarted = () => {
    if (user) {
      // If user is already authenticated, navigate based on role
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
        // If userRole is not available yet, navigate to general dashboard
        navigate("/dashboard");
      }
    } else {
      setShowForm(true);
    }
  };

  return (
    <div className="min-h-screen font-inter bg-gradient-to-b from-white to-gray-50">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-brand-purple opacity-10 blur-3xl"></div>
        <div className="absolute top-40 right-40 w-96 h-96 rounded-full bg-brand-blue opacity-10 blur-3xl"></div>
        <div className="absolute bottom-60 left-1/3 w-80 h-80 rounded-full bg-brand-purple/20 opacity-10 blur-3xl"></div>
      </div>
      
      <Navigation user={user} userRole={userRole} />

      {/* Main Content - Either Hero or Form */}
      {!showForm ? (
        <>
          <Hero handleGetStarted={handleGetStarted} />
          <Features />
          <Footer />
        </>
      ) : (
        <FormSection setShowForm={setShowForm} />
      )}
    </div>
  );
};

export default Landing;
