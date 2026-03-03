import React from 'react'
import '../style/feed.scss'
import Post from '../components/Post'
const Feed = () => {
  return (
       <main className='feed-page'>
        <div className="feed">
            <div className="posts">
                <Post/>
            </div>
        </div>
       </main>
  )
}

export default Feed