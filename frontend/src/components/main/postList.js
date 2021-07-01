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
  const history = useHistory();
  const [_IdPost, set_IdPost] = useState("");
  const [report, setReport] = useState(0);
  const [userId, setUserId] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const reportPost = (_IdPost) => {
    setReport(report + 1);
    axios
      .post(`http://localhost:5000/post/report/${_IdPost}`, { report })
      .then((res) => {
        set_IdPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editPost = () => {
    history.push("/editPost");
  };

  const archivePost = (_IdPost) => {
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
    axios
      .delete(`http://localhost:5000/post/${_IdPost}`)
      .then((res) => {
        set_IdPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };










  
  if (_IdPost === userId) {
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
  } else {
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
      </Menu>
    </div>;
  }


//test



// if (_IdPost === userId) {
//   return (
//     <div>
//     <IconButton
//       aria-label="more"
//       aria-controls="long-menu"
//       aria-haspopup="true"
//       onClick={handleClick}
//     >
//       <MoreVertIcon />
//     </IconButton>
//     <Menu
//       id="long-menu"
//       anchorEl={anchorEl}
//       keepMounted
//       open={open}
//       onClose={handleClose}
//       PaperProps={{
//         style: {
//           maxHeight: ITEM_HEIGHT * 4.5,
//           width: "20ch",
//         },
//       }}
//     >
//       <MenuItem
//         onClick={(e) => {
//           e.preventDefault();
//           handleClose();
//           reportPost(id);
//         }}
//       >
//         Report
//       </MenuItem>
//     </Menu>
//   </div>
//   );
// } else {

// <div>
//       <IconButton
//         aria-label="more"
//         aria-controls="long-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <MoreVertIcon />
//       </IconButton>
//       <Menu
//         id="long-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           style: {
//             maxHeight: ITEM_HEIGHT * 4.5,
//             width: "20ch",
//           },
//         }}
//       >
//         <MenuItem
//           onClick={(e) => {
//             e.preventDefault();
//             handleClose();
//             editPost(id);
//           }}
//         >
//           Edit Post
//         </MenuItem>
//         <MenuItem
//           onClick={(e) => {
//             e.preventDefault();
//             handleClose();
//             archivePost(id);
//           }}
//         >
//           Archive
//         </MenuItem>
//         <MenuItem
//           onClick={(e) => {
//             e.preventDefault();
//             handleClose();
//             deletePost(id);
//           }}
//         >
//           Delete
//         </MenuItem>
//       </Menu>
//     </div>
  
// }

//original code


  // return (
  //   <div>
  //     <IconButton
  //       aria-label="more"
  //       aria-controls="long-menu"
  //       aria-haspopup="true"
  //       onClick={handleClick}
  //     >
  //       <MoreVertIcon />
  //     </IconButton>
  //     <Menu
  //       id="long-menu"
  //       anchorEl={anchorEl}
  //       keepMounted
  //       open={open}
  //       onClose={handleClose}
  //       PaperProps={{
  //         style: {
  //           maxHeight: ITEM_HEIGHT * 4.5,
  //           width: "20ch",
  //         },
  //       }}
  //     >
  //       <MenuItem
  //         onClick={(e) => {
  //           e.preventDefault();
  //           handleClose();
  //           reportPost(id);
  //         }}
  //       >
  //         Report
  //       </MenuItem>
  //       <MenuItem
  //         onClick={(e) => {
  //           e.preventDefault();
  //           handleClose();
  //           editPost(id);
  //         }}
  //       >
  //         Edit Post
  //       </MenuItem>
  //       <MenuItem
  //         onClick={(e) => {
  //           e.preventDefault();
  //           handleClose();
  //           archivePost(id);
  //         }}
  //       >
  //         Archive
  //       </MenuItem>
  //       <MenuItem
  //         onClick={(e) => {
  //           e.preventDefault();
  //           handleClose();
  //           deletePost(id);
  //         }}
  //       >
  //         Delete
  //       </MenuItem>
  //     </Menu>
  //   </div>
  // );
}
