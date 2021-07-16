import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import List from "./menuList";
import PrimarySearchAppBarErr from "./menu404";

import { useHistory } from "react-router-dom";

export const Header = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
    const history = useHistory();
  
    const back = () => {
      history.push("/main");
    };
  return (
    <>
    
      <form onSubmit={handleSubmit}>
        <div className="navBar">
          {localStorage.getItem("token") ? (
            <div className="headerLeftNavBar">
              <List />
            </div>
          ) : (
            <div className="headerRightNavBar">
              <PrimarySearchAppBarErr />
      
            </div>
          )}
        
        </div>
      </form>
    </>
  );
};


