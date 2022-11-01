import React, { useContext } from 'react';
import AllMessages from '../AllMessages';
import Input from '../Input';
import { ChatContext } from '../../context/ChatContext';

import Cam from "../../assets/images/cam.png";
import Add from "../../assets/images/add.png";
import More from "../../assets/images/more.png";

import './chat.css';



function Chat() {

  const {data} = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className='chat__info'>
        <span>{data.user?.displayName}</span>
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