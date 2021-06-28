import React from "react";
import main from "./main.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createPost } from "../../reducers/post";
import { useHistory } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const buttonPost = (res) => {
    axios.post(`http://localhost:5000`);

    dispatch(createPost(res.data));
  };
  const handleClick = () => {
    history.push("/createPost");
  };

  return (
    <div className="App">
      <button className="contained" onClick={buttonPost("sport")}>
        Sport
      </button>
      <button className="contained" onClick={buttonPost("program")}>
        Programming
      </button>
      <button className="contained" onClick={buttonPost("cook")}>
        Cook
      </button>
      <button className="contained" onClick={buttonPost("english")}>
        English
      </button>
      <button className="post" onClick={handleClick}>
        Create Post
      </button>
    </div>
  );
};
export default Main;
