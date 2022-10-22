import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

// import img from '../../assets/images/img.png';

import './navbar.css'; 



function Navbar() {

  const {currUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className='navbar__logo'>Tchat</span>
      <div className='navbar__user'>
        <img className='navbar__img' src={currUser.photoURL} alt=""/>
        <span className='navbar__name'>{currUser.displayName}</span>
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