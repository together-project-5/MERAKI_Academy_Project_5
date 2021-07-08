import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./main.css";
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
    <>
      <div className="navBar-filter">
        <div className="left-2en-navBar">
          <button
            className="filter-button"
            onClick={(e) => {
              e.preventDefault();
              buttonPost("sport");
            }}
          >
            Sport
          </button>
          <button
            className="filter-button"
            onClick={(e) => {
              e.preventDefault();
              buttonPost("programming");
            }}
          >
            programming
          </button>
          <button
            className="filter-button"
            onClick={(e) => {
              e.preventDefault();
              buttonPost("cook");
            }}
          >
            Cook
          </button>
          <button
            className="filter-button"
            onClick={(e) => {
              e.preventDefault();
              buttonPost("english");
            }}
          >
            English
          </button>
        </div>
        <div className="right-2en-navBar">
          <button className="filter-button" onClick={handleClick}>
            Create Post
          </button>
        </div>
      </div>

    </>
  );
};

export default Main;
