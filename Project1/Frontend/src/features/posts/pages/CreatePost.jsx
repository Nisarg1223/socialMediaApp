import React,{useState,useRef} from 'react'
import '../style/createPost.scss'
import { usePost } from '../hooks/usePost'
import { useNavigate } from 'react-router'

const CreatePost = () => {
    const [caption,setcaption] = useState('');
    const postImageInputFieldRef = useRef(null);
    const {loading,handlepostCreation} = usePost();
    const Navigate = useNavigate()
  async  function handleSubmit(e){
        e.preventDefault();
        const file = postImageInputFieldRef.current.files[0];
        await handlepostCreation(file,caption);
        
        Navigate('/feed')
    
    }
    if(loading){
        return (
            <main>
                <h1>Creating Post...</h1>
            </main>
        )
    }
  return (
   <main className='create-post-page'>
    <div className="form-container">
        <h1>create post</h1>
        <form onSubmit={handleSubmit}>
            <label  className='post-img-label' htmlFor="post-img">choose file</label>
            <input hidden ref={postImageInputFieldRef} type="file" placeholder="enter file" name='post-image' id='post-img'/>
            <input type="text" value={caption} 
            onChange={function(e){
                setcaption(e.target.value);
            }} placeholder='enter caption' id='caption' name='caption' />
            <button className='button primary-btn'>Create Post</button>
        </form>
    </div>
   </main>
  )
}

export default CreatePost