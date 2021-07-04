import React, { useState } from "react";
import { Image } from 'cloudinary-react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


const Upload = () => {
    const [fileInputState, setFileInputState] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [previewSource, setPreviewSource] = useState()
    const [post, setPost] = useState({});

    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            posts: state.posts.posts,
        };
    });
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file)

    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    };
    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource)
        // const reader = new FileReader();
        // reader.readAsDataURL(selectedFile);
    }
    
    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('http://localhost:5000/post/api/upload', {
                method: 'post',
                body: JSON.stringify({ data: base64EncodedImage ,post:post }),
                headers: { 'Content-type': 'application/json' },
            }).then((result) => {
                console.log("result", result);
            })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <div className="createPostStyle">
                <form >
                    <select className="postType" name="type" onChange={handleChange}>
                        <option>type</option>
                        <option value="programming">programming</option>
                        <option value="sport">sport</option>
                        <option value="english">english</option>
                        <option value="cook">cook</option>
                    </select>
                    <textarea
                        name="description"
                        className="createPosTextArea"
                        placeholder=" Description"
                        onChange={handleChange}
                    />
                    <input
                        name="userId"
                        type="text"
                        placeholder=" UserId"
                        onChange={handleChange}
                    />
                    <input
                        name="title"
                        type="text"
                        placeholder=" Title"
                        onChange={handleChange}
                    />
                </form>
            </div>
            <input type="file" name="image" onChange=
                {handleFileInputChange} value={fileInputState} />
            <button onClick={handleSubmitFile}>Submit</button>
            {previewSource && (
                <img src={previewSource} alt="chosen"
                    style={{ height: '300px' }} />
            )}
        </div>
    )
}
export default Upload;