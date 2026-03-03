import React, { useState } from 'react'
import '../style/form.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'
const Register = () => {

  const [username,setusername] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('')
  const { handleRegister} = useAuth();


  async function handleFormSubmit(e){
    e.preventDefault();
   await handleRegister(username,email,password)
   .then(res=>{
    console.log(res)
   })
   setusername('')
   setemail('')
   setpassword('')
  }
  return (
  <main>
    <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={function(e){
          handleFormSubmit(e);
      }}>
        <input type="text" value={username}
        onChange={(e)=>{
          setusername(e.target.value);
        }}
        name='username' placeholder='Enter username here' />
        <input type="text" value={email} 
        onChange={(e)=>{
          setemail(e.target.value)
        }}
        name='Email' placeholder='Enter Email here' />
        <input type="password" 
        onChange={(e)=>{
          setpassword(e.target.value);
        }}
        value={password} name='password' placeholder='Enter password here' />
        <button>Register</button>
      </form>
       <p>Already have an account? <Link className='toggleAuthForm'to='/login'>Login</Link></p>
    </div>
  </main>
  )
}

export default Register