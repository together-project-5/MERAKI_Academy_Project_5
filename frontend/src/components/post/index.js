import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost, createPost } from "./../../reducers/post";
import like from "./img/like.png";
import comment from "./img/comment.png";
import save from "./img/save.png";
const [numLike, setNumLike] = useState("");
const addLike =()=>{

}
const ShowPosts = () => {
  const [post, setPost] = useState("");
  let description, title, url, type;

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
    };
  });

  return (
    <>
      <div>
      {console.log("elem:")}
        {state.posts.map((elem, i) => {
          
          console.log("elem.like",elem.likes);
          return (
            <div key={i}>
              <p>{elem.title}</p>
              <p>{elem.description}</p>
              <p>{elem.url}</p>
              <img src={like} />
              <img src={comment} onClick="addLike()"/>
              <img src={save} />
              <p>{elem.likes}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ShowPosts;
