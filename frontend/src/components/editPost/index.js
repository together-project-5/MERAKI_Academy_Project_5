import React, { useState } from "react";
import { useDispatch } from "react-redux";

const EditPost = () => {
    
  return (
    <>
      <div>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="description" />
        <button>done</button>
      </div>
    </>
  );
};
export default EditPost;
