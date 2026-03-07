import {Routes,Route} from 'react-router-dom'
import Login from './features/pages/Login.jsx'
import Register from './features/pages/Register.jsx'
import { useAuth } from './features/hooks/useAuth.js'
import Feed from './features/posts/pages/Feed.jsx'
import CreatePost from './features/posts/pages/CreatePost.jsx'
import Mynotifications from './features/notification/pages/Mynotifications.jsx'

const AppRoutes = () => {
  const {user} = useAuth();
  return (
    <Routes>
    <Route 
  path="/" 
  element={
    user ? (
      <h1>welcome {user.username}</h1>
    ) : (
      <h1>Please login</h1>
    )
  }
/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/feed' element={<Feed/>}/>
      <Route path='/create-post' element={<CreatePost/>}/>
      <Route path='/notifications' element={<Mynotifications/>}/>
    </Routes>
  )
}

export default AppRoutes