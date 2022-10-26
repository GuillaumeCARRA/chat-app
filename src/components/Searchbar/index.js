import React, { useContext, useState } from 'react';
// Create a reference to the cities collection
import { collection, query, where, getDoc, getDocs, doc,setDoc,updateDoc, serverTimestamp } from "firebase/firestore";
import {db} from "../../firebase"; 
import {AuthContext} from "../../context/AuthContext"; 

import './searchBar.css';

function Searchbar() {

  // for the input search
  const [username, setUsername] = useState("");

  // actual user
  const [user, setUser] = useState(null);
  
  const [error, setError] = useState(false);

  const { currUser } = useContext(AuthContext)

  // search an user
  const handleSearchUser = async () => {
    const q = query(
      collection(db, "users"), 
      where("displayName", "==" , username)
    );

    try{
       // function get to retrieve result ==> users
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc contains our user
        setUser(doc.data())
      });
    } catch(error) {
      setError(true);
    }

  };

  // listen for our keyboard action
  const handleKey = (e) => {
    e.code === "Enter" && handleSearchUser();
  };

  // select an user
  const handleSelect = async () => {
    // check whether the group(chats in firestore) exists
    // if not create 
    const combinedId = currUser.uid > user.uid 
    ? currUser.uid + user.uid 
    : user.uid + currUser.uid;

    try{
      const response = await getDoc(doc(db, "chats", combinedId));
      console.log('res 1', response);

      //exists from firebase
      if(!response.exists()){
        // create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        
        // create user chats 
        await updateDoc(doc(db, "userChats", currUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.id,
            displayName: user.displayName,
            photoURL: user.photoURL,
            role: "user",
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        // for the other user
        await updateDoc(doc(db, "userChats", user.uid),{
          [combinedId + ".userInfo"]: {
            uid: currUser.id,
            displayName: currUser.displayName,
            photoURL: currUser.photoURL,
            // role: "user"
          },
          [combinedId+".date"]: serverTimestamp(),
        });

      }
    } catch(error) {
      console.log('error', error);
    }
    setUser(null);

    // 
    setUsername('')
  }

  return (
    <div className='search'>
      <div className='search__form'> 
        <input 
          type="text" 
          placeholder='Trouver un utilisateur' 
          onKeyDown={handleKey} 
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {error && <span>Utilisateur introuvable</span>}
      {user && <div className='user__chat' onClick={handleSelect}>
        <img src={user.photoURL} alt=""/>
        <div className='user__info'>
          <span className='user__name'>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Searchbar;