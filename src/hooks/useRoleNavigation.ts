
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useRoleNavigation = () => {
  const navigate = useNavigate();

  const navigateBasedOnRole = async (userId: string): Promise<void> => {
    try {
      // First try to get the role from the profiles table
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', userId)
        .single();

      if (profileError) {
        console.error("Error fetching user role:", profileError);
        // If the role can't be determined, navigate to the default dashboard
        toast.error("Could not determine your user role");
        navigate("/dashboard");
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
      toast.error("An error occurred during navigation");
      navigate("/dashboard"); // Default route if error
    }
  };

  return { navigateBasedOnRole };
};
