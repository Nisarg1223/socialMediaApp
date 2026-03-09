import { useEffect, useState } from "react";
import { getMyProfile } from "../services/profile.api.js";

export function useProfile(){

  const [profile,setProfile] = useState(null);
  const [posts,setPosts] = useState([]);
  const [stats,setStats] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    async function fetchProfile(){
      try{

        const data = await getMyProfile();

        setProfile(data.user);
        setPosts(data.posts);
        setStats(data.stats);

      }
      catch(err){
        console.log(err);
      }
      finally{
        setLoading(false);
      }
    }

    fetchProfile();

  },[])

  return {
    profile,
    posts,
    stats,
    loading
  }

}