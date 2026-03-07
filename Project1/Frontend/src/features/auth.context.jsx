import { createContext, useState, useEffect, use } from "react";
import { getMe } from "./services/auth.api";

export const AuthContext = createContext();


export function AuthProvider({ children }) {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getMe();
        console.log(data.user.username);
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
