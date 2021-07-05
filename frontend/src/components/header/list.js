import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { setTokenOut, setUserOut } from "./../../reducers/login";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const state_2 = useSelector((state_2) => {
    return {
      user: state_2.login.user,
    };
  });

  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const profile = (event) => {
    history.push("/profile");
  };
  const createPost = (event) => {
    history.push("/createPost");
  };
  const editProfile = (event) => {
    history.push("/editProfile");
  };
  const favorite = (event) => {
    history.push("/favorite");
  };
  const archive = (event) => {
    history.push("/archive");
  };
  const dispatch = useDispatch();
  const Logout = (event) => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    localStorage.setItem("name", "");
    localStorage.setItem("_IdUser", "");
    dispatch(setTokenOut(""));
    dispatch(setUserOut({}));
    history.push("/login");
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {})}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List onClick={profile}>
        {[`${localStorage.getItem("name")}`].map((text, index) => (
          <ListItem button key={text} >
            <ListItemText primary={text} />
            <Avatar alt="Remy Sharp" src="" />{" "}
          </ListItem>
        ))}
      </List>
      <List onClick={editProfile}>
        {["Edit profile"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </ListItem>
        ))}
      </List>{" "}
      <List onClick={favorite}>
        {["Saved"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-bookmark"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
            </svg>{" "}
          </ListItem>
        ))}
      </List>
      <List onClick={archive}>
        {["Archive"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-archive"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg>
          </ListItem>
        ))}
      </List>{" "}
      <List onClick={createPost}>
        {["Create post"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List onClick={Logout}>
        {["Logout"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {[`right`].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
