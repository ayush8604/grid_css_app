import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoUrl from "../../images/polygame-logo.svg"
import "./navbar.css"
import { Avatar, Button, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, Stack } from '@mui/system';
import avatarImg from "../../images/navbar-avatar.png";
import Notifications from '@mui/icons-material/Notifications';
import MenuIcon from "@mui/icons-material/Menu";

function Navbar({ handleDrawerToggle, mobileOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  return (
    <nav className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex items-center justify-between h-6">
        <div className="flex items-center w-full">
        <IconButton
              color="inherit"
              className="menu-icon"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{
                display: { lg: "none", margin: "10px 10px" },
                alignSelf: "flex-start",
              }}
            >
              <MenuIcon />
            </IconButton>
            <div className="polygameLogo" style={{ cursor: "pointer" }} onClick={() => navigate("/home")} />

            <Box className="button" sx={{ flexGrow: 1 }}>
              {window.location.pathname == "/home" && window.innerWidth > 767 && (
                <>
                  <a target="_blank" href="https://about.polygame.io/" style={{ margin: "0px 10px", textDecoration: "none", color: "white" }}>
                    <Button
                      variant="contained"
                      sx={{
                        background: "#C6FF00",
                        color: "black",
                        "&:hover": {
                          background: "white",
                        },
                      }}
                      style={{
                        textTransform: "none",
                        padding: "5px 20px",
                        fontSize: "0.8rem",
                        borderRadius: "20px",
                      }}
                    >
                      About
                    </Button>
                  </a>

                  <a target="_blank" href="https://datastudio.google.com/reporting/407c5a25-b449-47bf-93cf-053702131de4/page/1M" style={{ margin: "0px 10px", textDecoration: "none", color: "white" }}>
                    <Button
                      variant="contained"
                      sx={{
                        background: "#C6FF00",
                        color: "black",
                        "&:hover": {
                          background: "white",
                        },
                      }}
                      style={{
                        textTransform: "none",
                        padding: "5px 20px",
                        fontSize: "0.8rem",
                        borderRadius: "20px",
                      }}
                    >
                      View Traction
                    </Button>
                  </a>
                </>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "flex" } }} className="profile-box">
              {/* <div>
              <Notification id={id} open={open} anchorEl={anchorEl} onClose={handleClose}/>
            </div> */}
              <Stack direction="row" spacing={1} className="avatar" onClick={() => navigate("/activities")}>
                <div className="avatarName" style={{ cursor: "pointer" }} onClick={() => navigate("/activities")}>
                  <p>username</p>
                </div>
              </Stack>
              <Notifications/>
              </Box>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
