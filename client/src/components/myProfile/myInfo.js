import React, { useState, useEffect } from "react";
import post from "./myProfile.css";
import Divider from "@material-ui/core/Divider";

const MyInfo = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="profile-nav">
        <img className="profile-pic" src={user.picture} />
        <h1 className="name">{user.name}</h1>
        <p className="emaill">{user.email}</p>
        <br />
        <Divider />
        <br />
        <br />
      </div>
    </>
  );
};

export default MyInfo;
