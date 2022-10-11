import React from 'react';

import './searchBar.css';

function Searchbar() {
  return (
    <div className='search'>
      <div className='search__form'> 
        <input type="text" placeholder='trouver un utilisateur'/>
      </div>
      <div className='user__chat'>
        <img src="https://images.pexels.com/photos/13885383/pexels-photo-13885383.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/>
        <div className='user__info'>
          <span className='user__name'>Michelle</span>
        </div>
      </div>
    </div>
  )
}

export default Searchbar;