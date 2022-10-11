import React from 'react';
import AllMessages from '../AllMessages';
import Input from '../Input';

import Cam from "../../assets/images/cam.png";
import Add from "../../assets/images/add.png";
import More from "../../assets/images/more.png";

import './chat.css';


function Chat() {
  return (
    <div className='chat'>
      <div className='chat__info'>
        <span>Michelle</span>
        <div className='chat__icons'>
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <AllMessages />
      <Input />
    </div>
  )
}

export default Chat;