import React from 'react'
import { Link,useNavigate, Navigate } from 'react-router-dom'
import Login from './Login'

export default function Signout() {

   const navigate = useNavigate();

  
   const handleClick = () => {
    localStorage.clear()
    const path = "/";
    window.location.href = path; };
    
   

  return (

    <div>
        
        <p>Thankyou for logging in</p>
        <p></p>
        <button type="button" onClick={handleClick}>Logout</button>
        
    </div>
  )
}
