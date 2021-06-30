import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite, deleteFavorite } from "../../reducers/favorite";
import likes from './../main/img/like.png'
import save from './../main/img/save.png'
import "./../main/main.css";

const GetFavorites = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            posts: state.posts.posts,
            favorites: state.favorites.favorites,
            user: state.login.user
        };
    });

    useEffect(() => {
        axios.get(
            `http://localhost:5000/favorite/post/${state.user._IdUser}`).then((res) => {
                dispatch(setFavorite(res.data));
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const saveFunction = (postId, userId) => {
        axios.delete(
            `http://localhost:5000/favorite/post/${postId}`).then((res) => {
                dispatch(deleteFavorite(res.data));
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            {/* {console.log("aa",state.favorites)} */}
            {state.favorites.map((post, i) => {
                return <div className="postDiv" key={i}>
                    <img className="profilePic" src='https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg' />
                    <p className="postTitle">{post.title}</p>
                    <p className="postDescription">{post.description}</p>
                    <img className="likeIcon" src={likes} />
                    <img onClick={(e) => {
                        e.preventDefault();
                        saveFunction(post._IdPost, post.userId)
                    }} className="saveIcon" src={save} />
                </div>
            })}
        </>
    )
}
export default GetFavorites;