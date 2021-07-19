import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../../reducers/post";
import Comment from "../comment/index";
import Like from "../like/index";
import Save from "../save/index";
import GetFavorites from "../../favorite/favorite.js"
import MenuItem from "../postList";
import ShowComment from "../comment/show";
import "./allPost.css";
import MainPage from "../mainPage";
import { useHistory } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

const AllPost = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [_IdPost, set_IdPost] = useState("");
  const [userId, setUserId] = useState("");
  const [show, setShow] = useState(false);
  const [idPost, setIdPost] = useState("");
  const [post, setPost] = useState([ ]);
  
  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      user: state.login.user,
    };
  });
  let userInfo = JSON.parse(localStorage.getItem("user"))


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/post`)
      .then((res) => {
        setPost(res.data.reverse())
        dispatch(setPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/post`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }, [state.posts]);
  
  return (
    <>
      <div className="allpost">
        <div className="ads">
          <MainPage />
        </div>

        {state.posts.length && 
          state.posts.map((post, i) => {
            <GetFavorites id={post.favorite}/>
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
                          setShow={setShow}
                          show={show}
                          id={post._IdPost}
                          i={i}
                        />
                      </div>
                      <Save id={post.favorite} i={i} postId={post._IdPost} />
                    </div>
                  </div>
                  <div>
                    <ShowComment
                      idPost={idPost}
                      id={post._IdPost}
                      show={show}
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
export default AllPost;
