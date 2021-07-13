import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const EditPost = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const state = useSelector((state) => {
    return {
      post: state.getPost.getPost,

    };
  });
  const edit = () => {
    const handleChangeTitle = (e) => {
      setTitle(e.target.value);
    };
    
  return (
    <>
      <div>
        <input type="text" placeholder="Title" 
         onChange={handleChangeTitle}/>
        <input type="text" placeholder="description" />
        <button>Submit</button>
      </div>
    </>
  );
};
export default EditPost;
