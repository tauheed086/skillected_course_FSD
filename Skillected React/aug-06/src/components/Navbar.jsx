import React from 'react'
import { ImHome } from 'react-icons/im'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
       <Link to= '/'><img src="https://brandlogos.net/wp-content/uploads/2020/11/Flipkart-logo-1-512x143.png" alt="" /></Link>
      <div className='nav-items'>
        <Link to= '/'><ImHome className='home-icon' /></Link>
        <Link to='useEffect'>UseEffect</Link>
        <li>Projects</li>
        <Link to='/form'>Form</Link>
        <Link to='/counter'>Counter</Link>
      </div>
      <div className='btn'>
        <Link to = '/login'><button>Login</button></Link>
        <Link to ='/signup'><button>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Navbar