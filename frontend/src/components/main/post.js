import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../reducers/post";
import { setFavorite, deleteFavorite } from "../../reducers/favorite";
import "./main.css";
import MenuItem from "./postList"
import MenuItems from "./listProfile"
import likes from './img/like.png'
import comments from './img/comment.png'
import save from './img/save.png'

const GetPost = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState(true)
    const state = useSelector((state) => {
        return {
            posts: state.posts.posts,
            user: state.login.user
        };
    });

    useEffect(() => {
        axios.get(
            `http://localhost:5000/post`).then((res) => {
                dispatch(setPost(res.data));
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const likesFunction = () => {
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
            {state.posts.map((post, i) => {
                return <div className="postDiv" key={i}>
                    <MenuItem />
                    <img className="profilePic" src='https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg' />
                    <p className="postTitle">{post.title}</p>
                    <p className="postDescription">{post.description}</p>
                    <img onClick={likesFunction} className="likeIcon" src={likes} />
                    <img onClick={commentsFunction} className="commentIcon" src={comments} />
                    <img onClick={() => {
                        console.log("post._IdPost", post._IdPost);
                        saveFunction(post._IdPost)
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