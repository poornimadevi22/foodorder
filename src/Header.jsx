import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers ,faPercent} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
    <div className="container">
  
    <div className="row">
    <div className="card-header col-10">
  <div className='icons'>
  <i className="bi bi-bell"></i>
  <i className="bi bi-envelope-fill"></i>
  <i className="bi bi-person-fill" style={{color:" rgba(252, 128, 25, 1)",}}></i>
  </div></div>
 
  </div>
  

</div>
</>
  )
}

export default Header