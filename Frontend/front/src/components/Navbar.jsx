import React from 'react'
import './navbar.css'
function Navbar(props) {
  return (
    <div id='nav'>
      <ul>
        <li>{props.LOGO}</li>
        <li>{props.HOME}</li>
        <li>{props.contact}</li>
        <li>{props.about}</li>
        
      </ul>
    </div>
  )
}

export default Navbar
