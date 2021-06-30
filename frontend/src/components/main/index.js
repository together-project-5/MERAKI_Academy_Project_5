import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import likes from "./img/like.png";
import comments from "./img/comment.png";
import save from "./img/save.png";
import "./main.css";
import MenuItem from "./postList"

const Main = () => {
  const history = useHistory();
  const [posts, setPosts] = useState("");

  const buttonPost = (type) => {
    axios
      .get(`http://localhost:5000/post/filter/${type}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = () => {
    history.push("/createPost");
  };

  const likesFunction = () => {};

  const commentsFunction = () => {};

  const saveFunction = () => {};
  return (
    <div className="App">
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
      {posts
        ? posts.map((post, i) => {
            return (
              <div className="postDiv" key={i}>
                <MenuItem />
                <img
                  className="profilePic"
                  src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
                />
                <p className="postTitle">{post.title}</p>
                <p className="postDescription">{post.description}</p>
                <img onClick={likesFunction} className="likeIcon" src={likes} />
                <img
                  onClick={commentsFunction}
                  className="commentIcon"
                  src={comments}
                />
                <img onClick={saveFunction} className="saveIcon" src={save} />
              </div>
            );
          })
        : ""}
    </div>
  );
};
export default Main;
