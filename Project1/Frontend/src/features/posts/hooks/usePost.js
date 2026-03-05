import { useContext,useEffect } from "react";

import {createPost, getFeed,likePost,unlikePost} from '../services/post..api'
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
     const handleLike = async (postId)=>{
     
      const data = await likePost(postId);
      await handleGetFeed();
   
     }
      const handleunLike = async (postId)=>{
     
      const data = await unlikePost(postId);
            await handleGetFeed();
     
     }
     useEffect(function(){
      handleGetFeed();
     },[])
      return {loading,feed,post,handleGetFeed,handlepostCreation,handleLike, handleunLike}
}