import React from 'react';

import './message.css';

function Message() {
  return (
    <div className='message owner'>
      <div className='message__info'>
        <img src="https://images.pexels.com/photos/12390070/pexels-photo-12390070.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="fleurs"/>
        <span>à l'instant</span>
      </div>
      <div className='message__content'>
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/12390070/pexels-photo-12390070.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="fleurs" />
      </div>
    </div>
  )
}

export default Message;