
import { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  userRole: string | null;
  loadingRole: boolean;
  getUserRole: (userId: string) => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  userRole: null,
  loadingRole: false,
  getUserRole: async () => null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loadingRole, setLoadingRole] = useState(false);

  const getUserRole = async (userId: string): Promise<string | null> => {
    try {
      setLoadingRole(true);
      const { data, error } = await supabase
        .from('profile')
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
      return null;
    } finally {
      setLoadingRole(false);
    }
  };

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // When user logs in, fetch their role
        if (session?.user) {
          setTimeout(() => {
            getUserRole(session.user.id);
          }, 0);
        } else {
          setUserRole(null);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      // Fetch role if user exists
      if (session?.user) {
        getUserRole(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, userRole, loadingRole, getUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};
