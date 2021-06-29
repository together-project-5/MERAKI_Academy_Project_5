import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./archive.css";
import { setArchive } from "../../reducers/archive";

const Archive = () => {
  const dispatch = useDispatch();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  const state = useSelector((state) => {
    return {
      // archives: state.archives.archives,
    };
  });

  useEffect(() => {
    axios.get(
        `http://localhost:5000/post/archive`).then((res) => {
            dispatch(setArchive(res.data));
        }).catch((err) => {
            console.log(err)
        })
}, [])
  return (
    <>
    <h1>hi</h1>
        {/* {console.log("here" ,state.archives.archives )}
        {state.archives.map((post, i) => {
          return (
            <div className="" key={i}>
              <img
                className=""
                src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
              />
              <p className="">{post.title}</p>
              <p className="">{post.description}</p>
            </div>
          );
        })} */}
    </>
  );
};

export default Archive;
