import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite, deleteFavorite } from "./../.././../reducers/favorite"
import save from "../img/save.png";

const Save = ({ id, i ,postId }) => {
  let status = id;
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      user: state.login.user,
    };
  });

  const saveFunction = (postId1) => {
         if(status===0){
           status =1
         }else{
           status =0
         }

      axios
        .post(`http://localhost:5000/post/favorite/${postId}`, { favorite:status})
        .then((res) => {
          dispatch(setFavorite(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
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
