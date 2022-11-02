import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

import './login.css';


function Login() {

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // we dont want to refresh the page when we submit
    e.preventDefault();
    // console.log('target', e.target[0].value);
    // e.target[0].value because we have multiple input
    // email & password for connected our user
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(true); 
    }
  }; 

  return (
    <div className='form__container'>
      <div  className='form__content'>
        <span className='form__logo'>Chat App</span>
        <h2 className='form__title'>Se Connecter</h2>
        <form onSubmit={handleSubmit}>
          <input className= "form__input" type="email" placeholder='email'/>
          <input className= "form__input" type="password" placeholder='password'/>
          <button className='form__btn'>Se connecter</button>
          {error && <span>Quelque chose ne va pas</span>}
        </form>
        <p className='form__signin'>Vous n'avez pas decompte ? <Link to="/register">Enregistrez-vous ici !</Link></p>
      </div>
    </div>
  )
}

export default Login;