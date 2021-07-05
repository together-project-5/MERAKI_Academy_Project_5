import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../reducers/post";
import Comment from "../main/comment/index";
import Like from "../main/like/index";
import Save from "../main/save/index";
import MenuItem from "../main/postList";

const MyPost = () => {
  const dispatch = useDispatch();
  const [_IdPost, set_IdPost] = useState("");
  const [userId, setUserId] = useState("");
  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      user: state.login.user,
    };
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/`)
      .then((res) => {
        dispatch(
          setPost(
            res.data.filter((elem, i) => {
              console.log(elem);
              return elem.userId == localStorage.getItem("_IdUser");
            })
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {state.posts.map((post, i) => {
        // if (post.userId === localStorage.getItem("_IdUser")) {
        return (
          <div className="postDiv" key={i}>
            <div>
              <MenuItem
                id={post._IdPost}
                onClick={() => {
                  return set_IdPost(post._IdPost);
                }}
                userIdP={post.userId}
                onClick={() => {
                  return setUserId(post.userId);
                }}
              />{" "}
              <img
                className="profilePic"
                src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
              />
              <p className="postTitle">{post.name}</p>
              <p className="postTitle">{post.title}</p>
              <p className="postDescription">{post.description}</p>
              <img className="postImage" src={post.url} />
              <div>
                <Like id={post._IdPost} i={i} />
                <Comment id={post._IdPost} i={i} />
                <Save id={post._IdPost} i={i} />
              </div>
            </div>
          </div>
        );
        // }
      })}
    </>
  );
};

export default MyPost;
