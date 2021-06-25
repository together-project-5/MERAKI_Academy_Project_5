import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from './../../reducers/post';

const CreatePost = () => {
    const [createPosts, setCreatePosts] = useState('');
    let title, description, url,type;
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            posts: state.posts.posts
        };
    });
    const createPost = () => {
        axios.post(
            `http://localhost:5000/post/create`,
            { createPosts },
        ).then((res) => {
            dispatch(createPost(res.data));
        }).catch((err) => {
            console.log(err)
        })
    };
    return (
        <>
            <div>
                <select
                    className=""
                    name="Type"
                    onChange={(e) => {
                        type = e.target.value;
                    }}
                >
                    <option>type</option>
                    <option value="programming">programming</option>
                    <option value="sport">sport</option>
                    <option value="english">english</option>
                </select>
                <input type="text" placeholder=" Title" onChange={(e) => { title = (e.target.value) }} />
                <textarea placeholder=" Description" onChange={(e) => { description = (e.target.value) }}/>
                <input type="text" placeholder=" URL" onChange={(e) => { url = (e.target.value) }} />
                <button onClick={createPost}>Create</button>
            </div>
        </>
    )
}

export default CreatePost