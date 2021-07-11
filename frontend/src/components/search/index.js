import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../main/comment/index";
import Like from "../main/like/index";
import Save from "../main/save/index";
import MenuItem from "../main/postList";
import ShowComment from "../main/comment/show";
import "../main/allPost/allPost.css";
import MainPage from "../main/mainPage";
import { useHistory } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

const SearchTitl = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [_IdPost, set_IdPost] = useState("");
  const [userId, setUserId] = useState("");
  const [aref, setAref] = useState(false);
  const [idPost, setIdPost] = useState("");
  const [posts, setPosts] = useState([]);
  const state = useSelector((state) => {
    return {
      title: state.searchTitle.search,

    };
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/title/${state.title}`)
      .then((res) => {
        console.log(res.data)
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {console.log("posts",posts)}
      <div className="aaa" ><h1>aaaaa</h1></div>
    </>

  )


}

export default SearchTitl;