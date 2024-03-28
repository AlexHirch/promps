import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

const Nav = ({setOpen , open}) => {
  return (
    <div className='container_nav'>
      <div className="nav">
        <h2 className='logo'>LOGO</h2>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/page1"}>Page-1</NavLink></li>
          <li><NavLink to={"/page2"}>Page-2</NavLink></li>
        </ul>
        <div></div> 
        <button onClick={() => setOpen(!open)}>Button</button>
      </div>
    </div>
  )
}

export default Nav