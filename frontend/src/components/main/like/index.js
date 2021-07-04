import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import likes from "../img/like.png";
import { setPost } from "../../../reducers/post";

const Like = ({ id, i }) => {
  const [like, setLike] = useState([]);
  const dispatch = useDispatch();
  const ar = [];

  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      user: state.login.user,
      comments: state.comments.comments,
    };
  });

  useEffect(() => {
    
    axios
      .get(`http://localhost:5000/post`)
      .then((res) => {
        res.data.forEach((post, i) => {

          ar.push(post.likes);
        });
        dispatch(setPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    setLike(ar);

  }, []);

  const likesFunction = (id, index) => {
    axios
      .get(`http://localhost:5000/user/like`, {
        userId: localStorage.getItem("user")._idUser,
        postId: id
      }).then((result) => {
        
      })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  console.log(addLike);
    let value;
    setAddLike(
      addLike.map((val, i) => {
        if (i === index) {
          return (val = false);
        }
        return val;
      })
    );
    setLike(
      like.map((post, i) => {
        if (i === index) {
          value = post + 1;
          return (post = post + 1);
        }
        return post;
      })
    );
    axios
      .put(`http://localhost:5000/post/editLike/${id}`, { likes: value })
      .then((res) => { })
      .catch((err) => {
        console.log(err);
      });
  };
  const disLikesFunction = (id, index) => {
    let value;
    setAddLike(
      addLike.map((val, i) => {
        if (i === index) {
          return (val = true);
        }
        return val;
      })
    );

    setLike(
      like.map((post, i) => {
        if (i === index) {
          value = post - 1;
          return (post = post - 1);
        }
        return post;
      })
    );
    axios
      .put(`http://localhost:5000/post/editLike/${id}`, { likes: value })
      .then((res) => { })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <img
        onClick={() => {
          if (addLike[i]) {
            likesFunction(id, i);
          } else {
            disLikesFunction(id, i);
          }
        }}
        className="likeIcon"
        src={likes}
      />
      {like[i] !== 0 && <p className="postTitle">{like[i]}</p>}
    </>
  );
};

export default Like;
