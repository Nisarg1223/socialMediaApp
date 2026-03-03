import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login, register, getMe } from "../services/auth.api.js";

export function useAuth(){
    const context = useContext(AuthContext);
   const {user,setuser,loading,setloading} = context;


   const handleLogin = async (username, password) => {
     setloading(true);
     try {
       const response = await login(username, password);
   
       console.log(response);  // Check structure
   
       setuser(response.user);   // ✅ FIXED
       return response;
     } catch (err) {
       console.log(err);
       throw err;
     } finally {
       setloading(false);
     }
   };
   
     const handleRegister = async (username, email, password) => {
       setloading(true);
       try {
         const response = await register(username, email, password);
         setuser(response.user);
         return response;
       } catch (err) {
         console.log(err);
       } finally {
         setloading(false);
       }
     };

     return{
        user,loading,handleLogin,handleRegister
     }
}