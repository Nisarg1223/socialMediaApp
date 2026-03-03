import {Routes,Route} from 'react-router-dom'
import Login from './features/pages/Login.jsx'
import Register from './features/pages/Register.jsx'
import { useAuth } from './features/hooks/useAuth.js'
import Feed from './features/posts/pages/Feed.jsx'
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
    </Routes>
  )
}

export default AppRoutes