import { Button } from "@mui/material";
import React, { useEffect, useState, memo, useContext } from "react";
import DialogComponent from "../wrappers/Dialoge";
// import UserContext from "../../context/UserContext";

const FollowUnFollow = ({ userId, name, ...rest }) => {
//   const { setMessage } = useContext(UserContext);
//   const [following, setFollowing] = useState(false);

//   useEffect(() => {
//     const getUser = () => {
//       let requestOptions = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + localStorage.getItem("pg-auth-token"),
//         },
//         body: JSON.stringify({ _id: userId }),
//       };
//       fetch("https://servapi.polygame.io/api/streamer/search/profile/", requestOptions)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("data: ", data);
//           setFollowing(data?.isFollowing);
//         });
//     };

//     if (userId) {
//       getUser();
//     }
//   }, [userId]);

  const followUnfollowUser = async (setOpen) => {
    // try {
    //   const requestOptions = {
    //     method: following ? "DELETE" : "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer " + localStorage.getItem("pg-auth-token"),
    //     },
    //     body: JSON.stringify({ _id: userId }),
    //   };
    //   let { status } = await fetch("https://servapi.polygame.io/api/user/follow", requestOptions);

    //   if (status === 200) {
    //     setMessage({
    //       message: following ? "Unfollow succesfull" : "Follow successful",
    //       type: "success",
    //     });
    //     setFollowing((prev) => !prev);
    //     setOpen?.(false);
    //   } else throw new Error("Some error occurred");
    // } catch (error) {
    //   setMessage({
    //     message: "Some error occured",
    //     type: "error",
    //   });
    //   console.log(error);
    // }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <DialogComponent
        actions={{
          rootProps: {
            style: {
              borderTop: "none",
              marginBottom: "40px",
              padding: "20px 10%",
            },
          },
          successBtnProps: {
            title: "Unfollow",
          },
        }}
        header={false}
        handler={{
          cancel: (setOpen) => {
            console.log("cancel");
            setOpen(false);
          },
          success: followUnfollowUser,
        }}
        Source={({ setOpen }) => (
          <Button
            {...rest}
            // onClick={(e) => {
            //   if (following) {
            //     setOpen(true);
            //     return;
            //   }
            //   followUnfollowUser();
            // }}
            variant="contained"
            sx={{
              background: "#C6FF00",
              color: "black",
            }}
            style={{
              textTransform: "none",
              padding: "5px 20px",
              fontSize: "0.8rem",
              borderRadius: "20px",
            }}
          >
            {/* {following ? "Following" : "Follow"} */}
          </Button>
        )}
      >
        <div
          style={{
            padding: "0px 13%",
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            color: "white",
            marginTop: "40px",
            gap: "10px",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "23px",
              fontStyle: "normal",
              fontWeight: 500,
              letterSpacing: "0em",
              margin: 0,
              width: "100%",
              textAlign: "center",
            }}
          >
            Are you sure you want to unfollow {name || "Streamer"}?
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 300,
              letterSpacing: "0em",
              margin: 0,
              width: "100%",
              textAlign: "center",
            }}
          >
            Up on unfollow you will not receive any notifications
          </p>
        </div>
      </DialogComponent>
    </div>
  );
};

export default memo(FollowUnFollow);
