import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
      <nav>
 <Link to='/'>Home</Link>
 <Link to='/login'>Login</Link>
 <Link to ='/product'>Product</Link>
 <Link to='/sports'>Sports</Link>
      </nav>
  )
}
export default Navbar
