import { ButtonUnstyled } from '@mui/base';
import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import avatar from "../Imagess/avatar.jpg"
// import FollowUnFollow from "../../buttons/FollowUnfallow"

function Sidebarcard() {
      const [streamers, setStreamers] = useState([
    { name: 'Stream1', img: '', followers: 100, views: 200 },
    { name: 'Stream2', img: 'image2.jpg', followers: 200, views: 300 },
    { name: 'Stream3', img: 'image3.jpg', followers: 300, views: 400 }
  ]);
  const navigate=useNavigate()
  
  return (
  <div className='bg-slate-900 h-screen pl-4 pr-6 '>
       <p className="p-1.5 text-white">Top Streamers this month</p>
       <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4 pr-5">
        {streamers.map((streamer, index) => (
        <div
          key={index}
          onClick={() => navigate(`/streamer-profile?id=${streamer._id}`)}
          className="  bg-slate-800 flex justify-between "
        >
          <img style={{width:"75px" ,borderRadius:"15px"}} src={avatar} alt={streamer.name}/>
          <div className="text-center mt-2 text-white pr-3">
            <p style={{fontSize:"small"}}>{streamer.name}</p>
            <p className=" text-sm font-sm rounded-md shadow-md text-white text-neutral-45 pr-50px" style={{fontSize:"xx-small"}}>{streamer.followers} followers | {streamer.views} views</p>
            <Button  sx={{
              background: "#C6FF00",
              color: "black",
            }}
            style={{
              textTransform: "none",
              padding: "5px 20px",
              fontSize: "0.8rem",
              borderRadius: "20px",
              width:"87px",
              height:"23px"
            }}>Follow</Button>
          </div>
        </div>
      ))}
    </div>
    <div>
    <p className="p-1.5 text-white">Top Streamers this month</p>
    <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4 w-11/12">
    {streamers.map((streamer, index) => (
        <div
          key={index}
          onClick={() => navigate(`/streamer-profile?id=${streamer._id}`)}
          className="  bg-slate-800 flex justify-between "
        >
          <img style={{width:"75px" ,borderRadius:"15px"}} src={avatar} alt={streamer.name}/>
          <div className="text-center mt-2 text-white pr-3 ">
            <p style={{fontSize:"small"}}>{streamer.name}</p>
            <p className=" text-sm font-sm rounded-md shadow-md text-white text-neutral-45 pr-50px" style={{fontSize:"xx-small"}}>{streamer.followers} followers | {streamer.views} views</p>
          </div>
        </div>
      ))}
    </div>
    </div>
</div>
  )
}

export default Sidebarcard
