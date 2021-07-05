import React from "react";
import { useHistory } from "react-router-dom";

import MyPost from "./myPost";
import MyInfo from "./myInfo";

const MyProfile = () => {
  const history = useHistory();

    const handleClick = () => {
        history.push("/createPost");
      };

  return (
    <>
      <MyInfo />
      <button className="post" onClick={handleClick}>
        Create Post
      </button>
      <MyPost />
    </>
  );
};
export default MyProfile;
