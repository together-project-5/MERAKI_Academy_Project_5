import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from './../../reducers/post';
import "./post.css";

const CreatePosts = () => {
    const [post, setPost] = useState({});
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            posts: state.posts.posts
        };
    });
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        axios.post(
            `http://localhost:5000/post/create`,
            post
        ).then((res) => {
            console.log("res", res.data);
            dispatch(createPost(res.data));
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <>
            <div className='createPostStyle'>
                <form onSubmit={handleSubmit}>
                    <select
                        className="postType"
                        name="type"
                        onChange={handleChange}
                    >
                        <option>type</option>
                        <option value="programming">programming</option>
                        <option value="sport">sport</option>
                        <option value="english">english</option>
                    </select>
                    <textarea name="description" className='createPosTextArea' placeholder=" Description" onChange={handleChange} />
                    <input name="userId" type="text" placeholder=" UserId" onChange={handleChange} />
                    <input name="title" type="text" placeholder=" Title" onChange={handleChange} />
                    <input name="url" type="text" placeholder=" URL" onChange={handleChange} />
                    <button type="submit">Post</button>
                </form>
            </div>
        </>
    )
}

export default CreatePosts