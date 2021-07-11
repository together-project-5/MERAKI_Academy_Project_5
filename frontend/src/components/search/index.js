import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import axios from "axios";

const SearchTitl = () => {
  const [posts, setPosts] = useState([]);
  const state = useSelector((state) => {
    return {
      title: state.searchTitle.search,

    };
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/title/${state.title}`)
      .then((res) => {
        console.log(res.data)
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="aaa" ><h1>aaaaa</h1></div>
    </>

  )


}

export default SearchTitl;