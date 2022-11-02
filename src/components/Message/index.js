import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

import './message.css';

function Message({message}) {


  // console.log('mess', message);
  const {currUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  return (
    <div className={`message ${message.senderId === currUser.uid && "owner"}`}>
      <div className='message__info'>
        <img 
          src={message.senderId === currUser.uid ? currUser.photoURL : data.user.photoURL} 
          alt="avatar"
        />
        <span>A l'instant</span>
      </div>
      <div className='message__content'>
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="avatar" />}
      </div>
    </div>
  )
}

export default Message;