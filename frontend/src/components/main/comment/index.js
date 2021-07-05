import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../../../reducers/comment";
import comments from "../img/comment.png";

const Comment = ({ id, i }) => {
  const dispatch = useDispatch();
  const [commentId, setCommentId] = useState("");
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");

  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      user: state.login.user,
      comment: state.comments.comment,
    };
  });

  const showComment = (id) => {
    setCommentId(id);
    setShow(!show);
  };

  useEffect(() => {
    let postId = id;
    axios
      .get(`http://localhost:5000/post/comment/${postId}`, { postId })
      .then((res) => {
        dispatch(setComments(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sendComment = (id) => {
    let userId = state.user._IdUser;
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
      <img
        onClick={() => {
          showComment(id);
          // showAllComment(id);
        }}
        className="comment-icon"
        src={comments}
      />
      {commentId === id && show && (
        <div className="post-comment-div">
          {console.log("state.comment", state.comment)}
          {state.comment
            .filter((comment, i) => {
              return comment.postId === id;
            })
            .map((comment, i) => {
              return (
                <div>
                  <p>{comment.comment}</p>
                </div>
              );
            })}
          <input
            onChange={(e) => {
              setComment(e.target.value);
            }}
            type="text"
            placeholder="comment"
          />
          <button
            onClick={() => {
              sendComment(id);
            }}
          >
            send
          </button>
        </div>
      )}
    </>
  );
};

export default Comment;
