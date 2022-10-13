import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../../firebase"; 

import AddAvatar from '../../assets/images/addAvatar.png';

import './register.css';

function Register() {

  const handleSubmit = (e) => {
    // we dont want to refresh the page when we submit
    e.preventDefault();
    console.log('target', e.target[0].value);
    // e.target[0].value because we have multiple input
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user; 
      console.log('user', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })


  }

  
 

  return (
    <div className='form__container'>
      <div  className='form__content'>
        <span className='form__logo'>Chat App</span>
        <h2 className='form__title'>Créer son compte</h2>
        <form onSubmit={handleSubmit}>
          <input className= "form__input" type="text"  placeholder='Entrez votre nom'/>
          <input className= "form__input" type="email" placeholder='email'/>
          <input className= "form__input" type="password" placeholder='password'/>
          <input style={{display: 'none'}} className= "form__input" type="file" id="file"/>
          <label className= "form__label" htmlFor='file'>
            <img className="form__img" src={AddAvatar} alt="avatar"/>
            <span>Photo de profil</span>
          </label>
          <button className='form__btn'>Créer un profil</button>
          <p className='form__signin'>Vous possédez déjà un compte ? Connectez-vous</p>
        </form>
      </div>
    </div>
  )
}

export default Register;