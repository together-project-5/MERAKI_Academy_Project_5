import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditPost = (props) => {
  console.log("props",props)
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
