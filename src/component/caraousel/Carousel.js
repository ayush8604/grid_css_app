import React, { useEffect, useState } from 'react'
import { Carousel } from "3d-react-carousal";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { display } from '@mui/system';
// import "./caraousel.css"


function Carousell({slides}) {
  const [games, setGames] = useState([]);

  const callback = function (index) {
    console.log("callback", index);
  };

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breed/malinois/images")
      .then(res => {
       console.log( setGames(res.data.message));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ width: "100%" ,margin:"100px",paddingRight:"150px" }}>
      <Carousel
        slides={games}
        // autoplay={true}
        interval={4000}
        onSlideChange={callback}
      />
    </div>
  
  )
}

export default Carousell
