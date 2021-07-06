import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite, deleteFavorite } from "./../.././../reducers/favorite"
import save from "../img/save.png";

const Save = ({ id, i }) => {
  const [status, setStatus] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      user: state.login.user,
    };
  });

  const saveFunction = (postId) => {
    setStatus(!status);
    let ID = state.user._IdUser;
    if (status) {
      axios
        .post(`http://localhost:5000/favorite/post`, { postId, userId: ID })
        .then((res) => {
          dispatch(setFavorite(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .delete(`http://localhost:5000/favorite/post/${postId}`)
        .then((res) => {
          dispatch(deleteFavorite(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <img
        onClick={(e) => {
          e.preventDefault();
          saveFunction(id);
        }}
        className="save-icon"
        src={save}
      />
    </>
  );
};

export default Save;
