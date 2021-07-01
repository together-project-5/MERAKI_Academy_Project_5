import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ITEM_HEIGHT = 48;

export default function LongMenu({ id }) {
  // console.log('post id', id)
  const history = useHistory();
  // const [idPost, setIdPost] = useState("");
  const [_IdPost, set_IdPost] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const reportPost = () => {
    
  };

  const editPost = () => {
  history.push("/editPost");
  };

  const archivePost = (_IdPost) => {
    console.log("id of post we want to archive", _IdPost);
    let archive = 1;
    axios
      .post(`http://localhost:5000/post/archive/${_IdPost}`, { archive })
      .then((res) => {
        set_IdPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (_IdPost) => {
    console.log("id of post we want to delete", _IdPost);
    axios
      .delete(`http://localhost:5000/post/${_IdPost}`)
      .then((res) => {
        set_IdPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
            reportPost(id);
          }}
        >
          Report
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            handleClose();
            editPost(id);
          }}
        >
          Edit Post
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            handleClose();
            archivePost(id);
          }}
        >
          Archive
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
  );
}
