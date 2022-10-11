import React from 'react';

import './chats.css';

function Chats() {
  return (
    <div className='chats'>
      <div className='user__chat'>
        <img src="https://images.pexels.com/photos/13885383/pexels-photo-13885383.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/>
        <div className='user__info'>
          <span className='user__name'>Michelle</span>
          <p className='user__msg'>Hello</p>
        </div>
      </div>
      <div className='user__chat'>
        <img src="https://images.pexels.com/photos/13885383/pexels-photo-13885383.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/>
        <div className='user__info'>
          <span className='user__name'>Michelle</span>
          <p className='user__msg'>Hello</p>
        </div>
      </div>
      <div className='user__chat'>
        <img src="https://images.pexels.com/photos/13885383/pexels-photo-13885383.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/>
        <div className='user__info'>
          <span className='user__name'>Michelle</span>
          <p className='user__msg'>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats;