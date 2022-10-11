import React from 'react';
import Sidebar from '../Sidebar/index'; 
import Chat from '../Chat/index'; 

import './home.css';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home;