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
  const handleChangeTitle = (e) => {
      setTitle(e.target.value);
    };
    const handleChangeDescription = (e) => {
      setDescription(e.target.value);
    };
  const edit = () => {
    axios
      .put(`http://localhost:5000/post/edit/${state.post[0]._IdPost}`,
        {
          title: title,
          description: description
        })
      .then((res) => {
        console.log(res.data)

      })
      .catch((err) => {
        console.log(err);
      });
    
  }
  return (
    <>
      <div>
        <input type="text" placeholder="Title" 
         onChange={handleChangeTitle}/>
        <input type="text" placeholder="description"
         onChange={handleChangeDescription} />
        <button onClick={edit}>Submit</button>
      </div>
    </>
  );
};
export default EditPost;
