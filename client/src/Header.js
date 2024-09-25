import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <a href="" className="logo">
      My Blog
    </a>
    <nav>
    <Link to="/">My Blog</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header>
  )
}

export default Header