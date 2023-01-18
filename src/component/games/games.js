
import React, { useEffect, useState } from "react";

import './Games.css';

export const Games = () => {
  var [games, setGames] = useState([]);
  useEffect(() => {
    const data = [require("../Imagess/image1.jpg"),require("../Imagess/image2.jpg"),require("../Imagess/image3.jpg"),require("../Imagess/image4.jpg")];
    setGames(data);
  }, []);
  
  return (
    <div >
      <div className="header">
        <p className="text-white">games</p>
        <p className="text-white">see all</p>
      </div>
   
      <div className="image-grid">
        {games.map((image, index) => (
          <div key={index}>
            <img src={image} alt="Local Image" />
          </div>
        ))}
      </div>
  
    </div>
  );
};



