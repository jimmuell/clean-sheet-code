
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useUserRole = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loadingRole, setLoadingRole] = useState(false);

  const getUserRole = async (userId: string): Promise<string | null> => {
    try {
      setLoadingRole(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error("Error fetching user role:", error);
        return null;
      }
      
      setUserRole(data?.role || null);
      return data?.role || null;
    } catch (err) {
      console.error("Error in getUserRole:", err);
      toast.error("Failed to retrieve user role");
      return null;
    } finally {
      setLoadingRole(false);
    }
  };

  return { userRole, setUserRole, loadingRole, getUserRole };
};
