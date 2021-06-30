import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../reducers/post";
import { setFavorite, deleteFavorite } from "../../reducers/favorite";
import "./main.css";
import MenuItem from "./postList";
// import MenuItems from "./listProfile";
import likes from "./img/like.png";
import comments from "./img/comment.png";
import save from "./img/save.png";

const GetPost = () => {
    const [addLike, setAddLike] = useState([]);
    const [like, setLike] = useState([]);
    const dispatch = useDispatch();
    const [status, setStatus] = useState(true);
    const [commentId, setCommentId] = useState("");
    const [show, setShow] = useState(false);
    const ar = [];
    const likeNum = [];
    const [comment, setComment] = useState("")

    const state = useSelector((state) => {
        return {
            posts: state.posts.posts,
            user: state.login.user
        };
    });

    useEffect(() => {
        axios
            .get(`http://localhost:5000/post`)
            .then((res) => {
                dispatch(setPost(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const saveFunction = (postId) => {

        setStatus(!status)
        let ID = state.user._IdUser;
        if (status) {
            axios.post(
                `http://localhost:5000/favorite/post`, { postId, userId:ID }).then((res) => {
                    dispatch(setFavorite(res.data));
                }).catch((err) => {
                    console.log(err)
                })
        } else {
            axios.delete(
                `http://localhost:5000/favorite/post/${postId}`).then((res) => {
                    dispatch(deleteFavorite(res.data));
                }).catch((err) => {
                    console.log(err)
                })
        }

    };

    useEffect(() => {
        axios
            .get(`http://localhost:5000/post`)
            .then((res) => {
                res.data.forEach((post, i) => {
                    likeNum.push(true);
                    ar.push(post.likes);
                });
                dispatch(setPost(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
        setLike(ar);
        setAddLike(likeNum);
    }, []);

    const likesFunction = (id, index) => {
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

    const showComment = (id) => {
        setCommentId(id);
        setShow(!show);
    };

    const sendComment = (id) => {
   let userId =   state.user._IdUser
   let postId =   id
        axios
            .post(`http://localhost:5000/post/comment/${userId}`,{userId,postId,comment})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {state.posts.map((post, i) => {
                return (
                    <div className="postDiv" key={i}>
                        <div>
                            <MenuItem />
                            <img
                                className="profilePic"
                                src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
                            />
                            <p className="postTitle">{post.title}</p>
                            <p className="postDescription">{post.description}</p>
                            <img
                                onClick={() => {
                                    if (addLike[i]) {
                                        likesFunction(post._IdPost, i);
                                    } else {
                                        disLikesFunction(post._IdPost, i);
                                    }
                                }}
                                className="likeIcon"
                                src={likes}
                            />
                            {like[i] !== 0 && <p className="postTitle">{like[i]}</p>}

                            <img
                                onClick={() => {
                                    showComment(post._IdPost);
                                }}
                                className="commentIcon"
                                src={comments}
                            />
                            <img
                                onClick={(e) => {
                                    e.preventDefault();
                                    saveFunction(post._IdPost);
                                }}
                                className="saveIcon"
                                src={save}
                            />
                        </div>
                        {commentId === post._IdPost && show && (
                            <div className="post-comment-div">
                                <input onChange={(e)=>{
                                    setComment(e.target.value)
                                }} type="text" placeholder="comment" />
                                <button onClick={()=>{sendComment(post._IdPost)}}>send</button>
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
};
export default GetPost;