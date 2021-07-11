import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 

import axios from "axios";

const SearchTitl = () => {
  const state = useSelector((state) => {
    return {
      title: state.searchTitle.search,
      
    };
  });
  console.log("statetitle",state.title);
  return(
  <>
    {console.log("title111")}
    <div className ="aaa" ><h1>aaaaa</h1></div>
    </>
  
  )
  

}

export default SearchTitl;