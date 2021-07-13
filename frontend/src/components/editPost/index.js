import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditPost = () => {
  const state = useSelector((state) => {
    return {
      post: state.getPost.getPost,

    };
  });
  
  return (
    <>
      <div>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="description" />
        <button>Submit</button>
      </div>
    </>
  );
};
export default EditPost;
