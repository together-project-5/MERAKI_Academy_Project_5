import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite, deleteFavorite } from "../../reducers/favorite";
import likes from "./../main/img/like.png";
import save from "./../main/img/save.png";
import "./../main/main.css";

const GetFavorites = (favoritePost) => {
  let status = favoritePost
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      favorites: state.favorites.favorites,
      user: state.login.user,
    };
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/favorite/post/${localStorage.getItem("_IdUser")}`)
      .then((res) => {
        dispatch(setFavorite(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state.favorites]);

  const saveFunction = (postId1) => {
    if (status === 0) {
      status = 1
    } else {
      status = 0
    }

    axios
      .post(`${process.env.REACT_APP_BACKEND_SERVER}/post/favorite/${postId1}`, { favorite: status })
      .then((res) => {
        dispatch(setFavorite(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {state.favorites.map((post, i) => {
        return (
          <div className="postDiv" key={i}>
            <div className="title_description">
              <div className="userData">
                <img
                  className="profilePic"
                  src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
                />
                <p className="user-post-name">{post.name}</p>
              </div>
              <p className="postTitle">{post.title}</p>
              <p className="postDescription">{post.description}</p>
              <img src={post.url} className="saveImage" /> <br></br>
              <img
                onClick={(e) => {
                  e.preventDefault();
                  saveFunction(post._IdPost);
                }}
                className="save-icon"
                src={save}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default GetFavorites;
