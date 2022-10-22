import React, { useState } from 'react';
// Create a reference to the cities collection
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../firebase"; 

import './searchBar.css';

function Searchbar() {

  // for the input search
  const [username, setUsername] = useState("");

  // actual user
  const [user, setUser] = useState(null);
  
  const [error, setError] = useState(false);

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

  return (
    <div className='search'>
      <div className='search__form'> 
        <input 
          type="text" 
          placeholder='Trouver un utilisateur' 
          onKeyDown={handleKey} 
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      {error && <span>Utilisateur introuvable</span>}
      {user && <div className='user__chat'>
        <img src={user.photoURL} alt=""/>
        <div className='user__info'>
          <span className='user__name'>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Searchbar;