import React, { useState,useEffect } from "react";

import axios from "axios";

const SearchTitl = ({title}) => {
  console.log("props",title);
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:5000/post/title/${title}`)
            .then((res) => {
              console.log(res)
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return(
      <h1>searcmm</h1>
    )

}

export default SearchTitl;