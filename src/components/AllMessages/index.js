import React, { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { ChatContext } from '../../context/ChatContext';
import Message from '../Message/index';

import './allMessages.css';


function AllMessages() {

  const [messages, setMessages] = useState([]);
 
  const { data } = useContext(ChatContext);
  
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unSub()
    }

  }, [data.chatId])

  // console.log('all messages', messages)

  return (
    <div className='allMessages'>
      {messages.map(message => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  )
}

export default AllMessages;