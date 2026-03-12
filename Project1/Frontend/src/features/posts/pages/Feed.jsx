import React,{useEffect} from 'react'
import '../style/feed.scss'
import Post from '../components/Post'
import { usePost } from '../hooks/usePost'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import FloatingMessages from '../components/FloatingMessages'
import Stories from '../components/Stories'

const Feed = () => {
    const {loading,feed,post,handleGetFeed,handleLike, handleunLike,handleunfollowUser,handleFollow,user} = usePost();

 useEffect(function(){
    handleGetFeed();
 },[])

 if(loading || !feed){
    return <h1>Feed is Loading...</h1>
 }
 console.log(feed)
  return (
       <main className='feed-page'>
         <Nav/>
         <Sidebar/>
         <FloatingMessages/>
         <Stories/>
        <div className="feed">
            <div className="posts">
               {feed.map(function(elem,idx){
             return <Post key={idx} user={elem.userId} post={elem} handleLike={handleLike} handleunLike={handleunLike} handleunfollowUser={handleunfollowUser} handleFollow={handleFollow} currentUser={user}/>
               })}
            </div>
        </div>
       </main>
  )
}
export default Feed