import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../../../reducers/comment";
import "./comment.css";

const ShowComment = ({ id, i, aref, idPost }) => {
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

  // useEffect(() => {
  //   let postId = id;
  //   axios
  //     .get(`http://localhost:5000/post/comment/${postId}`)
  //     .then((res) => {
  //       // dispatch(setComments(res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [commentId]);


  useEffect(() => {
    let postId = id;
    axios
      .get(`http://localhost:5000/post/comment/${postId}`)
      .then((res) => {
        dispatch(setComments(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


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
        setCommentId(res.data)
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {idPost === id && aref && (
        <div className="post-comment-div">
          {console.log("state.comment", state.comment)}
          {state.comment
            .filter((comment, i) => {
              return comment.postId === id;
            })
            .map((comment, i) => {
              return (
                <>
                  <div className="comments">
                    <p className="commenter-name">{comment.name}:</p>
                    <p className="comment-commenter">{comment.comment}</p>
                  </div>
                </>
              );
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
