import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../reducers/post";
import { setFavorite, deleteFavorite } from "../../reducers/favorite";
import "./main.css";
import MenuItem from "./postList"
import likes from './img/like.png'
import comments from './img/comment.png'
import save from './img/save.png'

const GetPost = () => {
    const [addLike, setAddLike] = useState([])
    const [like, setLike] = useState([])
    const dispatch = useDispatch();
    const [status, setStatus] = useState(true)
    const ar = []
    const likeNum = []
    const state = useSelector((state) => {
        return {
            posts: state.posts.posts,
            user: state.login.user
        };
    });

    useEffect(() => {
        axios.get(
            `http://localhost:5000/post`).then((res) => {

                res.data.forEach((post, i) => {
                    console.log("post like", post.likes);
                    likeNum.push(true)
                    ar.push(post.likes)
                })
                dispatch(setPost(res.data));
                //   console.log(res.data);

                //    setLike([...like,res.data.likes])
            }).catch((err) => {
                console.log(err)
            })
        console.log("arrrrrr", ar);
        setLike(ar)
        setAddLike(likeNum)
    }, [])
    const likesFunction = (id, index) => {
        console.log(addLike);
        let value;
        setAddLike(like.map((val, i) => {
            if (i === index) {
                return val = false;
            }
            return val;
        }))
        setLike(like.map((post, i) => {
            console.log("post", post);
            if (i === index) {
                value = post + 1
                return post = post + 1;

            }
            return post;
        }))
        axios
            .put(
                `http://localhost:5000/post/editLike/${id}`, { likes: value }).then((res) => {
                }).catch((err) => {
                    console.log(err)
                })

    }
    const disLikesFunction = (id, index) => {
        let value;
        setAddLike(like.map((val, i) => {
            if (i === index) {
                return val = true;
            }
            return val;
        }))

        setLike(like.map((post, i) => {

            console.log("post", post);
            if (i === index) {
                value = post - 1;
                return post = post - 1;
            }
            return post;
        }))
        axios
            .put(
                `http://localhost:5000/post/editLike/${id}`, { likes: value }).then((res) => {
                }).catch((err) => {
                    console.log(err)
                })
    }
    const commentsFunction = () => {
    }

    const saveFunction = (postId) => {

        setStatus(!status)
        let ID = state.user._IdUser;
        console.log("post", postId);
        if (status) {
            axios.post(
                `http://localhost:5000/favorite/post`, { postId, ID }).then((res) => {
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

    }
    return (
        <>
            {console.log(like)}
            {state.posts.map((post, i) => {
                return <div className="postDiv" key={i}>
                    <MenuItem />
                    <img className="profilePic" src='https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg' />
                    <p className="postTitle">{post.title}</p>
                    <p className="postDescription">{post.description}</p>
                    <img onClick={() => {
                        setLike(like.map((val, index) => {
                            if (i === index) {
                                return val = false;
                            }
                            return post;
                        }))
                        if (addLike[i]) {
                            likesFunction(post._IdPost, i);
                        }
                        else {
                            disLikesFunction(post._IdPost, i)
                        }

                    }} className="likeIcon" src={likes} />
                    {like[i] !== 0 && <p className="postTitle">{like[i]}</p>}

                    <img onClick={commentsFunction} className="commentIcon" src={comments} />
                    <img onClick={saveFunction} className="saveIcon" src={save} />
                    <img onClick={(e) => {
                        e.preventDefault();
                        saveFunction(post._IdPost, post.userId)
                    }} className="saveIcon" src={save} />
                    <MenuItems />
                    {/* <img onClick={() => {
                        console.log("post._IdPost",post._IdPost);
                        saveFunction(post._IdPost)
                    }} className="saveIcon" src={save} /> */}
                </div>
            })}
        </>
    )
}
export default GetPost;