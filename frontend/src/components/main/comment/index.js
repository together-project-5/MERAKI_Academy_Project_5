import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../../../reducers/comment";
import comments from "../img/comment.png";

const Comment = ({ id, i, show, setShow, setIdPost }) => {
  const dispatch = useDispatch();
  const [commentId, setCommentId] = useState("");

  const showComment = (id) => {
    setCommentId(id);
    setShow(!show);
  };

  // useEffect(() => {
  //   let postId = id;
  //   axios
  //     .get(`http://localhost:5000/post/comment/${postId}`, { postId })
  //     .then((res) => {
  //       dispatch(setComments(res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <img
        onClick={() => {
          setShow(!show);
          setIdPost(id);
          // showAllComment(id);
        }}
        className="comment-icon"
        src={comments}
      />
    </>
  );
};

export default Comment;
