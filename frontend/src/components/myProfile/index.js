import React from "react";
import { useHistory } from "react-router-dom";
import MyPost from "./myPost";
import MyInfo from "./myInfo";

const MyProfile = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/createPost");
  };
  const editProfile = () => {
    history.push("/editProfile");
  };

  return (
    <>
      {/* <MyInfo/> */}
      <div className="p-button">
        <div className="pr-button">
          <button className="profile-button" onClick={handleClick}>
            Create Post
          </button>
          <button className="profile-button" onClick={editProfile}>
            Edit Profile
          </button>
        </div>
      </div>
      <MyPost />
    </>
  );
};
export default MyProfile;
