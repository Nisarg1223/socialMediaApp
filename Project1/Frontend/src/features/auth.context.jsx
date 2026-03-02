import { createContext, useState, useEffect } from "react";
import { login, register, getMe } from "./services/auth.api";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(false);

  const handleLogin = async (email, password) => {
    setloading(true);
    try {
      const response = await login(email, password);
      setuser(response.user);
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  const handleRegister = async (username, email, password) => {
    setloading(true);
    try {
      const response = await register(username, email, password);
      setuser(response.user);
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  return 
  <AuthContext.Provider value={{user,loading,handleLogin,handleRegister}}>
    {children}
  </AuthContext.Provider>
}
