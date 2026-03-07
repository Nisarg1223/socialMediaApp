import { useState, useContext } from "react";
import { getPendingRequests,acceptRequest,rejectRequest } from "../services/notification.api";
import { AuthContext } from "../../auth.context";

export function useNotifications() {
  const { user } = useContext(AuthContext);

  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchPendingRequests() {
    try {
      setLoading(true);

      const data = await getPendingRequests();

      setPendingRequests(data.pendingRequests || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleAccept(username){
    try{
        await acceptRequest(username);
         setPendingRequests((prev) =>
        prev.filter((req) => req.follower !== username)
      );
    }
    catch(err){
        console.log(err);
    }
  }

  async function handleReject(username){
   try{
     await rejectRequest(username);
     setPendingRequests((prev) =>
        prev.filter((req) => req.follower !== username)
      );
   }
   catch(err){
    console.log(err);
   }
  }
  return {
    user,
    pendingRequests,
    loading,
    fetchPendingRequests,
    handleAccept,
    handleReject
  };
}