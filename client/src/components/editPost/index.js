import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const EditPost = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
    const history = useHistory();
  const state = useSelector((state) => {
    return {
      post: state.getPost.getPost,
      id:state.editPost.postId
    };
  });
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const edit = () => {
    console.log("state.id",state.id);
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_SERVER}/post/edit/${state.id}`,
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
      history.push("/main")
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
