import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../reducers/post";
import { setFavorite, deleteFavorite } from "../../reducers/favorite";
import "./main.css";
import likes from './img/like.png'
import comments from './img/comment.png'
import save from './img/save.png'

const GetPost = () => {
    const [addLike, setAddLike] = useState(true)
    const [like, setLike] = useState([])
    const dispatch = useDispatch();
    const [status, setStatus] = useState(true)
    const ar = []
    const state = useSelector((state) => {
        return {
            posts: state.posts.posts,
        };
    });
    useEffect(() => {
        axios.get(
            `http://localhost:5000/post`).then((res) => {
               
                res.data.forEach((post, i)=>{
                    console.log("post like",post.likes);
                    ar.push(post.likes) 
                })
                dispatch(setPost(res.data));
                //   console.log(res.data);

                //    setLike([...like,res.data.likes])
            }).catch((err) => {
                console.log(err)
            })
            console.log("arrrrrr",ar);
            setLike(ar)
    }, [])
    const likesFunction = (id,index) => {
        setLike(like.map((post, i)=>{
            console.log("post",post);
            if( i===index ){return post=post + 1}
            return post  ;
        }))
         console.log("like22",like);
         console.log(index)
         console.log("aeee",ar);
        axios
        .put(
            `http://localhost:5000/post/editLike/${id}`,{likes:2}).then((res) => {
            }).catch((err) => {
                console.log(err)
            })

    }
    const disLikesFunction = (id,index) => {
        setLike(like.map((post, i)=>{
            console.log("post",post);
            if( i===index ){return post=post - 1}
            return post  ;
        }))
    }
    const commentsFunction = () => {
    }
    const saveFunction = (postId, userId) => {
        setStatus(!status)
        if (status) {
            axios.post(
                `http://localhost:5000/favorite/post`, { postId, userId }).then((res) => {
                    dispatch(setFavorite(res.data));
                }).catch((err) => {
                    console.log(err)
                })
        } else {
            axios.delete(
                `http://localhost:5000/favorite/post`).then((res) => {
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
                    <img className="profilePic" src='https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg' />
                    <p className="postTitle">{post.title}</p>
                    <p className="postDescription">{post.description}</p>
                    <img onClick={()=>{
                        setAddLike(!addLike)
                        if(addLike){
                            likesFunction(post._IdPost,i);
                        }
                        else{
                            disLikesFunction(post._IdPost,i)
                        }
                        
                        }} className="likeIcon" src={likes} />
                        <p className="postTitle">{like[i]}</p>
                    <img onClick={commentsFunction} className="commentIcon" src={comments} />
                    <img onClick={(e) => {
                        e.preventDefault();
                        saveFunction(post._IdPost, post.userId)
                    }} className="saveIcon" src={save} />
                </div>
            })}
        </>
    )
}
export default GetPost;