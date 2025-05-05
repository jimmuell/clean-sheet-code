
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
    <div className="min-h-screen font-inter bg-hero-gradient">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-brand-purple opacity-5 blur-3xl"></div>
      <div className="absolute top-40 right-40 w-80 h-80 rounded-full bg-brand-blue opacity-5 blur-3xl"></div>
      
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
