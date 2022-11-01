import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../firebase';
import { v4 as uuidv4 } from "uuid";
 
import Img from "../../assets/images/img.png"
import Attach from "../../assets/images/attach.png"

import './input.css';



function Input() {

  //send text
  const [text, setText] = useState("");
  // console.log('text', text);

  //send image
  const [img, setImg] = useState("");

  const {currUser} = useContext(AuthContext);
 
  const {data} = useContext(ChatContext);

  const handleSend = async () => {
    if(img){

      const storageRef = ref(storage, uuidv4());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          // console.log(error);
          // setError(true)
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log('File available at', downloadURL);
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuidv4(),
                text,
                senderId: currUser.uid,
                date:Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuidv4(),
          text,
          senderId: currUser.uid,
          date:Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currUser.uid), {
      [data.chatId + ".lastMessage"] : {
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    });

    await updateDoc(doc(db, "userChats", data.user.id), {
      [data.chatId + ".lastMessage"] : {
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    });

    setText("");
    setImg(null);
  };

  return (
    <div className='input'>
      <input 
        type="text" 
        placeholder='Entrez votre message ici' 
        onChange={e =>setText(e.target.value)}
        value={text}
      />
      <div className='input__send'>
        <img src={Attach} alt="piece jointe"/>
        <input type="file" style={{display: "none"}} id="file" onChange={e =>setImg(e.target.files[0])}/>
        <label htmlFor='file'>
          <img src={Img} alt="piece jointe"/>
        </label>
        <button onClick={handleSend}>Envoyer</button>
      </div>
    </div>
  )
}

export default Input;