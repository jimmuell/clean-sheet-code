
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export const useRoleNavigation = () => {
  const navigate = useNavigate();

  const navigateBasedOnRole = async (userId: string): Promise<void> => {
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

  return { navigateBasedOnRole };
};
