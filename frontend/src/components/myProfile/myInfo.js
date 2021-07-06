import React, { useState, useEffect } from "react";
import post from "./myProfile.css";
import Divider from "@material-ui/core/Divider";

const MyInfo = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="profile-nav">
        <img
          className="profile-pic"
          src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
        />
        <h1 className="name">{user.name}</h1>
        {/* <p>{user.email}</p> */}
        {/* <p>{user._IdUser}</p> */}
        <img src={user.picture} />
        <br />
      <Divider />
      <br />
      <br />

      </div>
    </>
  );
};

export default MyInfo;
