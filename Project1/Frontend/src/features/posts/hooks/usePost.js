import { useContext,useEffect } from "react";

import {createPost, getFeed} from '../services/post..api'
import { PostContext } from "../post.context";

export  function usePost(){
     const context = useContext(PostContext);
     const {loading,setloading,post,setpost,feed,setfeed} = context;


      const handleGetFeed = async ()=>{
        
        setloading(true);
        const data = await getFeed()
        setfeed(data.posts)
        setloading(false);
      }
     const handlepostCreation = async (imageFile,caption)=>{
      setloading(true);
      const data = await createPost(imageFile,caption);
      setpost([...feed,data.post]);
      setloading(false);

     }
     useEffect(function(){
      handleGetFeed();
     },[])
      return {loading,feed,post,handleGetFeed,handlepostCreation}
}