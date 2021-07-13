import React, { useEffect,useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite, deleteFavorite } from "../../reducers/favorite";
import likes from "./../main/img/like.png";
import save from "./../main/img/save.png";
import "./../main/main.css";

const GetFavorites = () => {
  const [status, setStatus] = useState(true)
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      favorites: state.favorites.favorites,
      user: state.login.user,
    };
  });
  useEffect(() => {
    console.log("lo",localStorage.getItem("_IdUser"));
    if(status){
      setStatus(!status)
    axios
      .get(`http://localhost:5000/favorite/post/${localStorage.getItem("_IdUser")}`)
      .then((res) => {
        dispatch(setFavorite(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, []);

  const saveFunction = (postId) => {
    console.log("post",postId);
    if(!status){
      setStatus(status)
    axios
      .delete(`http://localhost:5000/favorite/post/${postId}`)
      .then((res) => {
        dispatch(deleteFavorite(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };
  console.log("state.favorites",state.favorites);
  return (
    <>
      {state.favorites.map((post, i) => {
        console.log("pp",post);
        return (
          <div className="postDiv" key={i}>
            <div className="title_description">
            <img
              className="profilePic"
              src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
            />
            <p className="postTitle">{post.title}</p>
            <p className="postDescription">{post.description}</p>
            <img 
              onClick={(e) => {
                e.preventDefault();
                saveFunction(post._IdPost);
              }}
              className="saveIcon"
              src={save}
              />
              </div>
          </div>
        );
      })}
    </>
  );
};
export default GetFavorites;
