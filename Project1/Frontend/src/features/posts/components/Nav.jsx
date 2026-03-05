import React from 'react'
import '../style/feed.scss'
import { useNavigate } from 'react-router'
const Nav = () => {
    const Navigate = useNavigate()
  return (
  <nav className='nav-bar'>
    <p>Insta</p>
    <button 
    onClick={function(){
        Navigate('/create-post')
    }}
    className='button primary-btn'>new post</button>
  </nav>
  )
}

export default Nav