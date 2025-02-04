import React, { useState } from 'react'
import image from '../Assets/navImage.png'
import './NavBar.css'

const NavBar = () => {
  const[menu,setMenu]= useState("Registration")
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={image}/>
        </div>
        <div className="right">
            <ul>
                <li onClick={()=>{setMenu("Registration")}}>Registration{menu==="Registration"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Fetch")}}>Fetch{menu==="Fetch"?<hr/>:<></>}</li>
            </ul>
        </div>
      
    </div>
  )
}

export default NavBar
