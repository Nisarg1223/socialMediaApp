


import { useContext, useState } from "react";
import { AuthContext } from "../../auth.context";
import { getPendingRequests } from "../services/notification.api"; 

export function useGetMe(){
 const context = useContext(AuthContext);
   const {loading,setloading,user} = context;
  
  const [pendingRequests, setPendingRequests] = useState([]);

  const fetchPendingRequests = async () => {
    try {
      setloading(true);
     console.log(user.username)
      const data = await getPendingRequests(user.username);

      if (data.pendingRequests) {
        setPendingRequests(data.pendingRequests);
      } else {
        setPendingRequests([]);
      }

    } catch (error) {
      console.error(error.response?.data?.message);
    } finally {
      setloading(false);
    }
  };
  return {
    pendingRequests,
    loading,
    fetchPendingRequests
  };
}

