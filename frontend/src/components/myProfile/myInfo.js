import React, { useState, useEffect } from "react";

const MyInfo = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user._IdUser}</p>
        <img src={user.picture} />
      </div>
    </>
  );
};

export default MyInfo;
