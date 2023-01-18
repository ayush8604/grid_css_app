import { Stack } from '@mui/material';
import React, { useState } from 'react'
import "./details.css"
import userImg from "../../images/user.png";

function Details() {
    const [dashboardStats, setDashboardStats] = useState({
        no_of_streamers: "5",
        no_of_viewers: "3",
        no_of_nfts: "2",
        no_of_stakers: "8",
        pgem_staked: "6",
        last_24hr_price: "2515",
        last_48hr_price: "25145",
      });
  return (
    <div className="grid-container">
    <div className="card2 column1">
    <div className="content">
        <div>
                    <div className="amount">
                      <p className='text-lime-300'>{dashboardStats?.no_of_streamers[0]?.no_of_streamers}</p>
                    </div>
                    
                      <div className="boxsimage">
                         <img src={userImg} alt="imageuser"  className="imageamount" />
                      </div>
                      <div className="sname ">
                        <p className='text-lime-300' >Streamers</p>
                      </div>
               
                    <div className="amount">
                      <p className='text-lime-300' >{dashboardStats?.no_of_viewers[0]?.no_of_viewers}</p>
                    </div>
                    
                      <div className="boxsimage">
                         <img src={userImg}alt="imageuser"  className="imageamount" />
                      </div>
                      <div className="sname">
                        <p className='text-lime-300' >Viewers</p>
                      </div>
                   
                  </div>
                  </div>
    </div>
    <div className="card2 column2">
    <div className="content">
                    <div className="amount">
                      <p className='text-lime-300'>{dashboardStats?.no_of_streamers[0]?.no_of_streamers}</p>
                    </div>
                    
                      <div className="boxsimage">
                         <img src={userImg}alt="imageuser"  className="imageamount" />
                      </div>
                      <div className="sname">
                        <p className='text-lime-300'>Streamers</p>
                      </div>
               
                    <div className="amount">
                      <p className='text-lime-300'>{dashboardStats?.no_of_viewers[0]?.no_of_viewers}</p>
                    </div>
                    
                      <div className="boxsimage">
                         <img src={userImg}alt="imageuser"  className="imageamount" />
                      </div>
                      <div className="sname">
                        <p className='text-lime-300'>Viewers</p>
                      </div>
                   
                  </div>
    </div>
    <div className="card2 column3">
    <div className="content">
                    <div className="amount">
                      <p className='text-lime-300'>{dashboardStats?.no_of_streamers[0]?.no_of_streamers}</p>
                    </div>
                    
                      <div className="boxsimage">
                         <img src={userImg}alt="imageuser"  className="imageamount" />
                      </div>
                      <div className="sname">
                        <p className='text-lime-300'>Streamers</p>
                      </div>
               
                    <div className="amount">
                      <p className='text-lime-300'>{dashboardStats?.no_of_viewers[0]?.no_of_viewers}</p>
                    </div>
                    
                      <div className="boxsimage">
                         <img src={userImg}alt="imageuser"  className="imageamount" />
                      </div>
                      <div className="sname">
                        <p className='text-lime-300'>Viewers</p>
                      </div>
                   
                  </div>
    </div>
    <div className="card2 column4">
    <div className="content">
                    <div className="amount">
                      <p className='text-lime-300'>{dashboardStats?.no_of_streamers[0]?.no_of_streamers}</p>
                    </div>
                    
                      <div className="boxsimage">
                         <img src={userImg}alt="imageuser"  className="imageamount" />
                      </div>
                      <div className="sname">
                        <p className='text-lime-300'>Streamers</p>
                      </div>
               
                    <div className="amount">
                      <p className='text-lime-300'>{dashboardStats?.no_of_viewers[0]?.no_of_viewers}</p>
                    </div>
                    
                      <div className="boxsimage">
                         <img src={userImg}alt="imageuser"  className="imageamount" />
                      </div>
                      <div className="sname">
                        <p className='text-lime-300'>Viewers</p>
                      </div>
                   
                  </div>
    </div>
  </div>
  
  )
}

export default Details
