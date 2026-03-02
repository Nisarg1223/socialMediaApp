import React, { useState } from 'react'
import '../style/form.SCSS'
import {Link} from 'react-router'
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
  const {handleLogin} = useAuth()
    async function handleFormSubmit(e){
    e.preventDefault();
    handleLogin(username,password)
    .then(res=>{
      console.log(res)
    })
   
  }
  return (
   <main>
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={function(e){
        handleFormSubmit(e);
      }}>
        <input type="text" value={username} 
        onChange={(e)=>{
          setusername(e.target.value);
        }}
        name='username'placeholder='Enter username' />
        <input type="text" value={password} 
        onChange={(e)=>{
          setpassword(e.target.value);
        }}
        name='password' placeholder='Enter password' />
        <button type='submit'>Login</button>
      </form>
      <p>Don't have an account? <Link className='toggleAuthForm' to='/register'>Register</Link></p>
    </div>
   </main>
  )
}

export default Login