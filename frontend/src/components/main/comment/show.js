import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../../../reducers/comment";
import "./comment.css";

const ShowComment = ({ id, i,aref,idPost }) => {
  const [commentId, setCommentId] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      user: state.login.user,
      comment: state.comments.comment,
    };
  });

  const sendComment = (id) => {
    let userId = localStorage.getItem("_IdUser");
    console.log(userId);
    let postId = id;
    axios
      .post(`http://localhost:5000/post/comment/${userId}`, {
        userId,
        postId,
        comment,
      })
      .then((res) => {
        dispatch(setComments(res.data));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {idPost === id&&aref && (
        <div className="post-comment-div">
          {console.log("state.comment", state.comment)}
          {state.comment
            .filter((comment, i) => {
              return comment.postId === id;
            })
            .map((comment, i) => {
              return <p>{comment.comment}</p>;
            })}
          <div className="div-send-comment">
            <input
              className="write-comment"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              type="text"
              placeholder="comment"
            />
            <button
              className="send-comment-button"
              onClick={() => {
                sendComment(id);
              }}
            >
              send
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ShowComment;
