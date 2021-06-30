import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const reportPost = () => {};

  const editPost = (postId) => {
    axios
      .put(`http://localhost:5000/post/edit/${postId}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const archivePost = (postId) => {
    axios
      .get(`http://localhost:5000/post/archive/${postId}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postId) => {
    axios
      .delete(`http://localhost:5000/post/${postId}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  // {postId
  //     ? postId.map((postId) => {
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
            reportPost();
          }}
        >
          Report
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            handleClose();
            editPost();
          }}
        >
          Edit Post
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            handleClose();
            archivePost();
          }}
        >
          Archive
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            handleClose();
            deletePost();
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
  //   })
  // : "";
}
