import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPost } from "../../reducers/getPost";

import axios from "axios";
import { useSelector } from "react-redux";
import "./main.css";

const ITEM_HEIGHT = 48;

export default function LongMenu({ id, userIdP }) {
  const history = useHistory();
  const [_IdPost, set_IdPost] = useState("");
  const [report, setReport] = useState(0);

  const dispatch = useDispatch();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const archivePost = (_IdPost) => {
    let archive = 0;
    axios
      .post(`${process.env.REACT_APP_BACKEND_SERVER}/post/archive/${_IdPost}`, { archive })
      .then((res) => {
        set_IdPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (_IdPost) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_SERVER}/post/${_IdPost}`)
      .then((res) => {
        set_IdPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="menuList">

          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
            
              <MenuItem
                onClick={(e) => {
                  e.preventDefault();
                  handleClose();
                  archivePost(id);
                }}
              >
                unArchive
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  e.preventDefault();
                  handleClose();
                  deletePost(id);
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </div>
      
      </div>
    </>
  );
}
