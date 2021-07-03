import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { setArchive } from "../../reducers/archive";
import List from "./menuList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginRight: "40px",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const showArchive = async () => {
    await axios
      .get(`http://localhost:5000/post/archive`)
      .then((res) => {
        dispatch(setArchive(res.data));
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/archive");
  };

  const showFavorite = () => {
    history.push("/favorite");
  };
  const showCreatePost = () => {
    history.push("/createPost");
  };

  
  return (
    <div className={classes.root}>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <SettingsIcon />
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>my profile</MenuItem>
                    <MenuItem onClick={showFavorite}>my favorite</MenuItem>
                    <MenuItem onClick={showCreatePost}>create new post</MenuItem>
                    <MenuItem onClick={showArchive}>my archive</MenuItem>
                    <MenuItem onClick={handleClose}>edit my profile</MenuItem>
                    <hr></hr>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
