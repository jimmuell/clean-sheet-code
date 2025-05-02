
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/components/AuthProvider";

// Pages
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import SubmissionsPage from "./pages/dashboard/SubmissionsPage";
import MessagesPage from "./pages/dashboard/MessagesPage";
import DocumentsPage from "./pages/dashboard/DocumentsPage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import HelpCenterPage from "./pages/dashboard/HelpCenterPage";
import CalendarPage from "./pages/dashboard/CalendarPage";
import NotFound from "./pages/NotFound";
import SubmissionForm from "./components/SubmissionForm";

// Role-specific dashboard pages
import AttorneyDashboard from "./pages/dashboard/AttorneyDashboard";
import ClientDashboard from "./pages/dashboard/ClientDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";

const queryClient = new QueryClient();

// Protected Route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/auth" />;
  }
  
  return <>{children}</>;
};

// Role-restricted route wrapper
const RoleRestrictedRoute = ({ 
  children, 
  allowedRoles 
}: { 
  children: React.ReactNode;
  allowedRoles: string[];
}) => {
  const { user, userRole } = useAuth();
  
  if (!user) {
    return <Navigate to="/auth" />;
  }
  
  if (userRole && !allowedRoles.includes(userRole.toLowerCase())) {
    return <Navigate to="/dashboard" />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            
            {/* Role-specific dashboard routes */}
            <Route path="attorney" element={
              <RoleRestrictedRoute allowedRoles={["attorney"]}>
                <AttorneyDashboard />
              </RoleRestrictedRoute>
            } />
            
            <Route path="client" element={
              <RoleRestrictedRoute allowedRoles={["client"]}>
                <ClientDashboard />
              </RoleRestrictedRoute>
            } />
            
            <Route path="admin" element={
              <RoleRestrictedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </RoleRestrictedRoute>
            } />
            
            {/* Common dashboard routes */}
            <Route path="submissions" element={<SubmissionsPage />} />
            <Route path="new-submission" element={<SubmissionForm />} /> 
            <Route path="messages" element={<MessagesPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="documents" element={<DocumentsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="help" element={<HelpCenterPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
