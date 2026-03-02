import {BrowserRouter, Routes,Route} from 'react-router'
import Login from './features/pages/Login.jsx';
import Register from './features/pages/Register.jsx';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>welcome to the app</h1>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
      
      </BrowserRouter>
  )
}

export default AppRoutes