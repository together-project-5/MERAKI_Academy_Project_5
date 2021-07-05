import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

const MyInfo = () => {
  const dispatch = useDispatch();
//   const [user, setUser] = useState("");
  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      user: state.login.user,
    };
  });

//   useEffect(async() => {
//     await axios
//       .get(`http://localhost:5000/user/name/${localStorage.getItem("name")}`)
//       .then(async(res) => {
//        await setUser(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  return (
    <>
      <div>
          
        {/* <p>{user[0].name}</p>
        <p>{user[0].email}</p>
        <p>{user[0]._IdUser}</p>
        <img src={user[0].picture} /> */}
      </div>
    </>
  );
};
export default MyInfo;
