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
      const unsub = onSnapshot(doc(db, "userChats", currUser.uid), (doc) => {
        setChats(doc.data())
      });

      return () => {
        unsub()
      };
    };
    currUser.uid && getChats()
  }, [currUser.uid])

  console.log(Object.entries(chats));

  // Object.entries converted object into an array

  return (
    <div className='chats'>
      {Object.entries(chats)?.map(chat =>(
      <div className='user__chat' key={chat[0]}>
        <img src={chat[1].userInfo.photoURL} alt="avatar"/>
        <div className='user__info'>
          <span className='user__name'>{chat[1].userInfo.displayName}</span>
          <p className='user__msg'>{chat[1].userInfo.lastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Chats;