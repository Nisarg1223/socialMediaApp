import React,{useEffect} from 'react'
import '../style/feed.scss'
import Post from '../components/Post'
import { usePost } from '../hooks/usePost'

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
        <div className="feed">
            <div className="posts">
               {feed.map(function(elem){
             return <Post user={elem.userId} post={elem}/>
               })}
            </div>
        </div>
       </main>
  )
}
export default Feed