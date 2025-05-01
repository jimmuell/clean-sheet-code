
import { Navigate, Outlet, useLocation, useNavigate, useEffect } from "react-router-dom";
import { useAuth } from "@/components/AuthProvider";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const Dashboard = () => {
  const { user, userRole, loadingRole } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If we have user and role, and we're at the root dashboard, redirect based on role
    if (user && userRole && location.pathname === "/dashboard") {
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
          // Stay at dashboard root for unknown roles
          break;
      }
    }
  }, [user, userRole, location.pathname, navigate]);

  if (!user) {
    return <Navigate to="/auth" />;
  }

  // Show loading or the dashboard with appropriate content
  return (
    <DashboardLayout>
      {loadingRole ? (
        <div className="flex items-center justify-center h-full">
          <p>Loading dashboard...</p>
        </div>
      ) : (
        <Outlet />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
