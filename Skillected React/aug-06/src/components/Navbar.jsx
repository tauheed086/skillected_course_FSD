import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="https://brandlogos.net/wp-content/uploads/2020/11/Flipkart-logo-1-512x143.png" alt="" />
      <div className='nav-items'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Blogs</li>
        <li>Contact</li>
      </div>
      <div className='btn'>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar