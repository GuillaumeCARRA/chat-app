import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; 
import { auth, db, storage } from "../../firebase"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

import AddAvatar from '../../assets/images/addAvatar.png';

import './register.css';

function Register() {

  const [error, setError] = useState(false);
 
  const handleSubmit = async (e) => {
    // we dont want to refresh the page when we submit
    e.preventDefault();
    console.log('target', e.target[0].value);
    // e.target[0].value because we have multiple input
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{

      // Create user
      const response = await createUserWithEmailAndPassword(auth, email, password); 

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

  
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          // console.log(error);
          setError(true)
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log('File available at', downloadURL);
            // user from updateProile
            // photoUrl && display name from e.target[0].value
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            // create an user on the db of firebase
            await setDoc(doc(db, "users", response.user.uid), {
              id: response.user.uid,
              displayName, 
              email,
              photoURL: downloadURL,
              role: "user"
            });
          });
        }
      );
    } catch (error) {
      setError(true); 
    }

  }; 

  
 

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
          {error && <span>Quelque chose ne va pas</span>}
        </form>
        <p className='form__signin'>Vous possédez déjà un compte ? Connectez-vous</p>
      </div>
    </div>
  )
}

export default Register;