import React,{useEffect} from 'react'
import '../style/feed.scss'
import Post from '../components/Post'
import { usePost } from '../hooks/usePost'
import Nav from '../components/Nav'

const Feed = () => {
    const {loading,feed,post,handleGetFeed} = usePost();

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
        <div className="feed">
            <div className="posts">
               {feed.map(function(elem,idx){
             return <Post key={idx} user={elem.userId} post={elem}/>
               })}
            </div>
        </div>
       </main>
  )
}
export default Feed