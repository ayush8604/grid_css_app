import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100vw",
    padding: "10px 21px",
    maxWidth: "500px",
    borderRadius: "8px !important",
    display: "flex",
    flexDirection: "column",
    background: "rgba(19, 23, 29, 1) !important",
  },
  titleRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "600 !important",
    borderBottom: "1.32px rgba(198, 255, 0, 1) solid",
    padding: "20px 0px",
    "& p": {
      margin: 0,
      fontFamily: "Poppins",
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "36px",
      color: "white",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
  contentRoot: {
    padding: "10px 0px !important",
  },
  actionRoot: {
    borderTop: "1.32px rgba(198, 255, 0, 1) solid",
    padding: "20px 0px",
    display: "flex",
    gap: "25px",
  },
  cancelBtn: {
    border: "1px rgba(198, 255, 0, 1) solid !important",
    filter: "drop-shadow(0px 16px 30px rgba(0, 0, 0, 0.06))",
    borderRadius: "8px",
    padding: "10px !important",
    flex: 1,
    whiteSpace: "nowrap",
    background: "transparent",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "13.8808px",
    color: "#C6FF00 !important",
    textTransform: "none",
  },
  confirmBtn: {
    border: "1px rgba(198, 255, 0, 1) solid",
    filter: "drop-shadow(0px 16px 30px rgba(0, 0, 0, 0.06))",
    borderRadius: "8px",
    padding: "10px !important",
    flex: 1,
    whiteSpace: "nowrap",
    background: "#C6FF00 !important",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "13.8808px",
    color: "#212134 !important",
    textTransform: "none",
  },
  closeIconRoot: {
    padding: "2px",
    border: "2px rgba(198, 255, 0, 1) solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    cursor: "pointer",
  },
}));

const DialogComponent = ({
  title = "Leave us a message",
  children,
  Source,
  handler: { cancel, success },
  header = true,
  actions: { rootProps, successBtnProps, show = true } = {
    rootProps: {},
    successBtnProps: {},
    show: true,
  },
  titleProps: { close } = { close: true },
  unmounted = () => {},
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) unmounted();
  }, [open]);

  return (
    <>
      <Source setOpen={setOpen} />
      <Dialog open={open} classes={{ paper: classes.paper }}>
        {header && (
          <DialogTitle classes={{ root: classes.titleRoot }}>
            <p>{title}</p>
            {close && (
              <div
                className={classes.closeIconRoot}
                onClick={setOpen.bind(this, false)}
              >
                <CloseIcon style={{ transform: "scale(0.7)" }} />
              </div>
            )}
          </DialogTitle>
        )}
        <DialogContent classes={{ root: classes.contentRoot }}>
          {typeof children === "function" ? children(setOpen) : children}
        </DialogContent>
        {show && (
          <DialogActions
            {...(rootProps || {})}
            classes={{ root: classes.actionRoot }}
          >
            {successBtnProps.hideAction ? '' : 
              <>
              <Button
                onClick={
                  cancel ? cancel.bind(this, setOpen) : setOpen.bind(this, false)
                }
                classes={{ root: classes.cancelBtn }}
              >
                Cancel
              </Button>
              <Button
                onClick={success.bind(this, setOpen)}
                classes={{ root: classes.confirmBtn }}
              >
                {successBtnProps?.title || "Confirm"}
              </Button>
              </>
            }
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};

export default DialogComponent;
