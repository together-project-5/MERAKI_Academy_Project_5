import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../reducers/post";
import Comment from "../main/comment/index";
import Like from "../main/like/index";
import Save from "../main/save/index";
import MenuItem from "../main/postList";
import post from "./myProfile.css";
import ShowComment from "../main/comment/show";
import Divider from "@material-ui/core/Divider";

const MyPost = () => {
  const dispatch = useDispatch();
  const [_IdPost, set_IdPost] = useState("");
  const [userId, setUserId] = useState("");
  const [aref, setAref] = useState(false);
  const [idPost, setIdPost] = useState("");

  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      user: state.login.user,
    };
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/post/`)
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
        return (
          <>
            <div className="div-post-comment" key={i}>
              <div className="post-div" key={i}>
                <div className="user-information-list">
                  <div className="user-information">
                  <img className="profile-picture" src={post.picture} />
                    <p className="user-post-name">{post.name}</p>



                  </div>

                  <MenuItem
                    id={post._IdPost}
                    onClick={() => {
                      return set_IdPost(post._IdPost);
                    }}
                    userIdP={post.userId}
                    onClick={() => {
                      return setUserId(post.userId);
                    }}
                  />
                </div>
                <div className="post-informations">
                  <p className="post-title">{post.title}</p>
                  <p className="post-description">{post.description}</p>
                </div>

                <div className="post-information">
                  <img className="post-image" src={post.url} />
                  <div className="post-information-2"></div>
                </div>
                <br />
                <Divider />

                <div className="post-reaction">
                  <div className="post-reaction-2">
                    <Like id={post._IdPost} i={i} />
                    <Comment
                      setIdPost={setIdPost}
                      setAref={setAref}
                      aref={aref}
                      id={post._IdPost}
                      i={i}
                    />
                  </div>
                  <Save id={post._IdPost} i={i} />
                </div>
              </div>
              <div>
                <ShowComment
                  idPost={idPost}
                  id={post._IdPost}
                  aref={aref}
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MyPost;

