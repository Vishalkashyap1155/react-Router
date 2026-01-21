import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        {/* <Link to="/"><li>Home</li></Link >
        <Link to="/about"><li>About</li></Link >
        <Link to="/login"><li>Login</li></Link > */}

        <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to="/"><li>Home</li></NavLink >
        <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to="/about"><li>About</li></NavLink >
        <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to="/login"><li>Login</li></NavLink >
      </nav>
    </div>
  )
}

export default Navbar
