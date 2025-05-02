
import { createContext, useContext } from "react";
import { Session, User } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  userRole: string | null;
  loadingRole: boolean;
  getUserRole: (userId: string) => Promise<string | null>;
}

// Create the auth context with default values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  userRole: null,
  loadingRole: false,
  getUserRole: async () => null,
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
