
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/components/AuthProvider";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default Dashboard;
