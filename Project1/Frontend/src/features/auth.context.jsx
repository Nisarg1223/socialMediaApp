import { createContext, useState, useEffect } from "react";
import { getMe } from "./services/auth.api";

export const AuthContext = createContext();


export function AuthProvider({ children }) {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getMe();
        setuser(data.user);
      } catch (err) {
        // User not authenticated
      }
    };
    fetchUser();
  }, []);

  return (
  <AuthContext.Provider value={{user,setuser,loading,setloading}}>
    {children}
  </AuthContext.Provider>
  )
}
