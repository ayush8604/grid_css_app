import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Sidebarcardd() {
      const [streamers, setStreamers] = useState([
    { name: 'Stream1', img: 'image1.jpg', followers: 100, views: 200 },
    { name: 'Stream2', img: 'image2.jpg', followers: 200, views: 300 },
    { name: 'Stream3', img: 'image3.jpg', followers: 300, views: 400 }
  ]);
  const navigate=useNavigate()
  return (
    <div className='bg-slate-900 h-80 pl-4 pr-6 '>
      <p className="p-1.5 text-white">Top Streamers this month</p>
       <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4 ">
       {streamers.map((streamer, index) => (
        <div
          key={index}
          onClick={() => navigate(`/streamer-profile?id=${streamer._id}`)}
          className="  bg-slate-800 flex justify-between "
        >
          <img className="  " src={streamer.img} alt={streamer.name}/>
          <div className="text-center mt-2 text-white pr-3">
            <p className="">{streamer.name}</p>
            <p className=" text-sm font-sm rounded-md shadow-md text-white text-neutral-45 pr-50px">{streamer.followers} followers | {streamer.views} views</p>
          </div>
        </div>
      ))}
    </div>
</div>



  )
}

export default Sidebarcardd
