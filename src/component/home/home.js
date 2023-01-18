import React from 'react'
import Sidebar from '../sidebar/sidebar';
import Navbar from '../navbar/navbar';
import "./home.css"
import Sidebarcard from '../sidebar cards/sidebar-card';
import Sidebarcardd from '../sidebar cards/sidebar-card2';
import Main from '../main/main';
import Details from '../details/details';
import { Games } from '../games/games';
import Stream from '../streams/stream';


function Home() {
  return (
     <div id="grid-container">
      <div id="navbar">
        <Navbar/>
      </div>
        <Sidebar/>
      <div id="main">
        <div id="row1">
          <Main/>
        </div>
        <div id="row2">
          <Details/>
        </div>
        <div >
          <div>
          
           <Games/>
           </div> 
        </div>
        <div id="row4">
          <div id="row-3"><Stream/></div>
        </div>
      </div>
      <div id="right-sidebar">
        <div id="right-sidebar-1">
          <Sidebarcard/>
        </div>
      </div>
    </div>
 
  )
}

export default Home;