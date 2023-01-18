// import { ClassNames } from "@emotion/react";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
// import $ from "jquery";
// import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import UserContext from "../../context/UserContext";
import activityIcon from "../../images/icons/Activity.svg";
import chatIcon from "../../images/icons/Chaticon.svg";
import eyeIcon from "../../images/icons/viewicon.png";
import infoIcon from "../../images/icons/abouticon.png";
import exchangeIcon from "../../images/icons/Exchange.svg";
import homeIcon from "../../images/icons/home.svg";
import leaderboardIcon from "../../images/icons/Leaderboard.svg";
import nftIcon from "../../images/icons/nft.svg";
import polycoinIcon from "../../images/icons/Polycoin.svg";
import settingIcon from "../../images/icons/Settings.svg";
import stakingIcon from "../../images/icons/staking_icon.svg";
import "./sidebar.css"
// import Logout from "../dialogs/Logout";


// // import UserService from "../../services/UserService";
// import Beastreamer from "../submitRequest/Beastreamer";




import React from 'react'

function Sidebar() {
  return (
    <div id="left-sidebar">
    <div className="pt-3 h-screen pl-10 text-lg bg-slate-900 text-white 
    ">
    <Link to="/" >
  <div className="p-1 flex items-center cursor-pointer">
    <img src={homeIcon} alt="home icon" className=" mr-2" />
    <span className="ml-3 text-sm text-sm">PolyStream</span>
  </div>
</Link>

        <Link to="/my-schedule" >
            <div   className="p-1 flex items-center cursor-pointer">
              <img
                src={nftIcon}
                alt="NFT icon"
                className=" mr-2"
              />
               <span className="ml-2 text-sm">My Schedules</span>
            </div>
          </Link>
          <Link to="/nft-marketplace" >
          <div  className="p-1 flex items-center cursor-pointer">
            <img
              src={nftIcon}
              alt="NFT icon"
              className=" mr-2"
            />
             <span className="ml-2 text-sm">PolyNFT</span>
          </div>
        </Link>
              
        <Link to="/exchange" >
          <div  className="p-1 flex items-center cursor-pointer">
            <img
              src={exchangeIcon}
              alt="profile icon"
              className=" mr-2"
            />
               <span className="ml-2 text-sm">PolyX</span>
          </div>
        </Link>
        <Link to="/polycoins" >
          <div className="p-1 flex items-center cursor-pointer">
            <img
              
              src={polycoinIcon}
              alt="profile icon"
              className=" mr-2"
            />
             <span className="ml-2 text-sm">PolyWallet</span>
          </div>
        </Link>
        <Link to="/staking" >
          <div  className="p-1 flex items-center cursor-pointer">
            <img
             
              src={stakingIcon}
              alt="profile icon"
              className=" mr-2"
            />
             <span className="ml-2 text-sm">Staking</span>
          </div>
        </Link>
        <Link to="/leaderboard" >
          <div  className="p-1 flex items-center cursor-pointer">
            <img
              
              src={leaderboardIcon}
              alt="staking icon"
              className=" mr-2"
            />
             <span className="ml-2 text-sm">LeaderBoard</span>
          </div>
        </Link>
        <Divider className="divider" />
        <Link to="/settings" >
          <div  className="p-1 flex items-center cursor-pointer">
            <img
             
              src={settingIcon}
              alt="Settings icon"
              className=" mr-2"
            />
             <span className="ml-2 text-sm">Settings</span>
          </div>
        </Link>
        <Link to="/activities" >
          <div  className="p-1 flex items-center cursor-pointer">
            <img
             
             src={activityIcon}
             alt="Activity icon"
             className=" mr-2"
            />
             <span className="ml-2 text-sm">Activity</span>
          </div>
        </Link>
        <Link to="/https://about.polygame.io/" >
          <div  className="p-1 flex items-center cursor-pointer">
            <img
             
             src={infoIcon}
             alt="About icon"
             className=" mr-2"
            />
             <span className="ml-2 text-sm">About</span>
          </div>
        </Link>
        <Link to="https://datastudio.google.com/reporting/407c5a25-b449-47bf-93cf-053702131de4/page/1M" >
          <div  className="p-1 flex items-center cursor-pointer">
            <img
             
             src={eyeIcon}
                    alt="Traction icon"
                    className=" mr-2"
            />
             <span className="ml-2 text-sm">View Traction</span>
          </div>
        </Link>
    <div className="p-3">Logout</div>
    </div>
    </div>
  )
}

export default Sidebar
