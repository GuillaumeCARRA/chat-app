import React from 'react';

import './login.css';

function Login() {
  return (
    <div className='form__container'>
      <div  className='form__content'>
        <span className='form__logo'>Chat App</span>
        <h2 className='form__title'>Créer son compte</h2>
        <form>
          <input className= "form__input" type="email" placeholder='email'/>
          <input className= "form__input" type="password" placeholder='password'/>
          <button className='form__btn'>Se connecter</button>
          <p className='form__signin'>Vous n'avez pas decompte ? Enregistrez-vous ici !</p>
        </form>
      </div>
    </div>
  )
}

export default Login;