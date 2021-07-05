import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import likes from "../img/like.png";
import { setPost } from "../../../reducers/post";
const ar = [];

const Like = ({ id, i }) => {
  const [like, setLike] = useState([]);
  const dispatch = useDispatch();
  

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
   
  }, []);

  useEffect(() => {
    setLike(ar);
  }, []);

  const likesFunction = (id, index) => {
    console.log("user id",index)
    console.log("post id",id)
    console.log("aaaaaaaaaaaaaaaa",ar[0])
    let value;

    axios
      .get(`http://localhost:5000/user/like/${localStorage.getItem("_IdUser")}/${ id}`, {
        userId: localStorage.getItem("_IdUser"),
        postId: id
      }).then((result) => {
        console.log("result", result.data)
        if (result.data.length == 0) {
          axios
            .post(`http://localhost:5000/create/like`, {
              userId: localStorage.getItem("_IdUser"),
              postId: id
            }).then((result) => {
              setLike(
                like.map((post, i) => {
                  if (i === index) {
                    value = post + 1;
                   
                    return post+1;
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
            })
        }
        else {
          axios
            .delete(`http://localhost:5000/user/like/${localStorage.getItem("_IdUser")}/${ id}`, {
            }).then((result) => {
              setLike(
                like.map((post, i) => {
                  if (i === index) {
                    value = post - 1;
                    return post -1 ;
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
            })
        }
      })
      .catch((err)=>{
        console.log(err)
      })
      console.log("ae ashe")
  }
  
  return (
    <>
      <img
        onClick={() => {
          likesFunction(id, i);

        }}
        className="likeIcon"
        src={likes}
      />
      {like[i] !== 0 && <p className="postTitle">{like[i]}</p>}
    </>
  );
};

export default Like;
