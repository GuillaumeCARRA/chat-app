import React from 'react';

import Img from "../../assets/images/img.png"
import Attach from "../../assets/images/attach.png"

import './input.css';

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Entrez votre message ici'/>
      <div className='input__send'>
        <img src={Attach} alt="piece jointe"/>
        <input type="file" style={{display: "none"}} id="file"/>
        <label htmlFor='file'>
          <img src={Img} alt="piece jointe"/>
        </label>
        <button>Envoyer</button>
      </div>
    </div>
  )
}

export default Input;