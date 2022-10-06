import React from 'react';
import AddAvatar from '../../assets/images/addAvatar.png';

import './register.css';

function Register() {
  return (
    <div className='form__container'>
      <div  className='form__content'>
        <span className='form__logo'>Chat App</span>
        <h2 className='form__title'>Créer son compte</h2>
        <form>
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