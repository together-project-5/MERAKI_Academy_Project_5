import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../../reducers/post";
import { setId } from "../../../reducers/chat";
import Comment from "../comment/index";
import Like from "../like/index";
import Save from "../save/index";
import MenuItem from "../postList";
import ShowComment from "../comment/show";
import "./allPost.css";
import MainPage from "../mainPage";
import chat from "../img/chat.png"
import Chat from "../../chat/index";
import { useHistory } from "react-router-dom";

const AllPost = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [_IdPost, set_IdPost] = useState("");
  const [userId, setUserId] = useState("");
  const [aref, setAref] = useState(false);
  const [idPost, setIdPost] = useState("");
<<<<<<< HEAD


=======
>>>>>>> 51a55bfd2f0bea20341a7a426c365e3aaf29cced
  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      user: state.login.user,
    };
  });
  useEffect(() => {
    console.log("receiverId", state.receiverId);
    axios
      .get(`http://localhost:5000/post`)
      .then((res) => {
        dispatch(setPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(state.posts);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/post`)
      .then((res) => { })
      .catch((err) => {
        console.log(err);
      });
  }, [state.posts]);
  return (
    <>
      <div>
        <MainPage />
        {state.posts.length &&
          state.posts.map((post, i) => {
            return (
              <>
                <div className="div-post-comment" key={i}>
                  <div className="post-div" key={i}>
                    <div className="user-information-list">
                      <div className="user-information">
                        <img
                          className="profile-picture"
                          src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
                        />
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
                    <div className="post-information">
                      <img className="post-image" src={post.url} />
                      <div className="post-information-2">
                        <p className="post-title">{post.title}</p>
                        <p className="post-description">{post.description}</p>
                      </div>
                    </div>
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
                      {/* {false && <Chat id={post.userId} />} */}
                      <img src={chat} onClick={(e) => {
                        history.push("/chat")
                        dispatch(setId(post._IdPost));
                      }} />
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
      </div>
    </>
  );
};
export default AllPost