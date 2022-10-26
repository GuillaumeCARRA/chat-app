import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { doc, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase"; 

import './chats.css';


function Chats() {

  // fecth conversation
  const [chats, setChats] = useState([]); 

  const {currUser} = useContext(AuthContext);

  // we listen in realtime the app when there is some changes
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currUser.id), (doc) => {
        setChats(doc.data())
      });

      return () => {
        unsub()
      };
    };
    currUser.id && getChats()
  }, [currUser.id])

  console.log(Object.entries(chats));

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