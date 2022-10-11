import React from 'react';
import Navbar from '../Navbar/index'; 
import Searchbar from '../Searchbar/index';

import './sideBar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar />
      <Searchbar />
    </div>
  )
}

export default Sidebar;