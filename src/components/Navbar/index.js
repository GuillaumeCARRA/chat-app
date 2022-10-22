import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import img from '../../assets/images/img.png';

import './navbar.css'; 


function Navbar() {
  return (
    <div className='navbar'>
      <span className='navbar__logo'>Tchat</span>
      <div className='navbar__user'>
        <img className='navbar__img' src={img} alt=""/>
        <span className='navbar__name'>Joris</span>
        <button 
          className='navbar__btn'
          onClick={() => signOut(auth)}
        >
          se déconnecter
        </button>
      </div>
    </div>
  )
}

export default Navbar;