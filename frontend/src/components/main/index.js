import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Like from "./like/index";
import Comment from "./comment/index";
import Save from "./save/index";
import "./main.css";
import MenuItem from "./postList";
import { setPost } from "../../reducers/post";
import GetPost from "./../../components/main/allPost";

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const buttonPost = (type) => {
    axios
      .get(`http://localhost:5000/post/filter/${type}`)
      .then((res) => {
        dispatch(setPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    history.push("/createPost");
  };

  return (
    <div>
      <button
        className="contained"
        onClick={(e) => {
          e.preventDefault();
          buttonPost("sport");
        }}
      >
        Sport
      </button>
      <button
        className="contained"
        onClick={(e) => {
          e.preventDefault();
          buttonPost("programming");
        }}
      >
        programming
      </button>
      <button
        className="contained"
        onClick={(e) => {
          e.preventDefault();
          buttonPost("cook");
        }}
      >
        Cook
      </button>
      <button
        className="contained"
        onClick={(e) => {
          e.preventDefault();
          buttonPost("english");
        }}
      >
        English
      </button>

      <button className="post" onClick={handleClick}>
        Create Post
      </button>
      <GetPost />
    </div>
  );
};

export default Main;
