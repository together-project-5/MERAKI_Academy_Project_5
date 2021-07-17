import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

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
      .put(
        `${process.env.REACT_APP_BACKEND_SERVER}/post/edit/${state.post[0]._IdPost}`,
        {
          title: title,
          description: description,
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <div className="TitlePost">
          <TextField
            id="outlined-textarea"
            label="Title"
            multiline
            variant="outlined"
            onChange={handleChangeTitle}
            name="title"
            type="text"
          />
        </div>
        <div className="TitlePost">
          <TextField
            id="outlined-textarea"
            label="description"
            multiline
            variant="outlined"
            onChange={handleChangeDescription}
            name="title"
            type="text"
          />
        </div>
     
        <button className="postSubmits" onClick={edit}>Submit</button>
      </div>
    </>
  );
};
export default EditPost;
