import { useContext, useEffect } from "react";

import {
  createPost,
  getFeed,
  likePost,
  unlikePost,
  followUser,
  unfollowUser,
} from "../services/post..api";
import { useAuth } from "../../hooks/useAuth";
import { PostContext } from "../post.context";

export function usePost() {
  const context = useContext(PostContext);

  const { loading, setloading, post, setpost, feed, setfeed } = context;
   const { user } = useAuth();
  const handleGetFeed = async () => {
    setloading(true);
    const data = await getFeed();
    setfeed(data.posts);
    setloading(false);
  };
  const handlepostCreation = async (imageFile, caption) => {
    setloading(true);
    const data = await createPost(imageFile, caption);
    setpost([...feed, data.post]);
    setloading(false);
  };
  const handleLike = async (postId) => {
    const data = await likePost(postId);
    await handleGetFeed();
  };
  const handleunLike = async (postId) => {
    const data = await unlikePost(postId);
    await handleGetFeed();
  };
  const handleFollow = async (username) => {
    try {
      setloading(true);
      const data = await followUser(username);
      await handleGetFeed();
      setloading(false);
    } catch (err) {
      console.error(err.response?.data?.message);
      setloading(false);
    }
  };
  const handleunfollowUser = async (username) => {
    try {
      setloading(true);
      const data = await unfollowUser(username);
      await handleGetFeed();
      setloading(false);
    } catch (error) {
      console.error(error.response?.data?.message);
      setloading(false);
    }
  };
  useEffect(function () {
    handleGetFeed();
  }, []);
  return {
    loading,
    feed,
    post,
    handleGetFeed,
    handlepostCreation,
    handleLike,
    handleunLike,
    handleFollow,
   handleunfollowUser,
   user
  };
}
