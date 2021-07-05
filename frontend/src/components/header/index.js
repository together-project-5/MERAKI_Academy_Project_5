import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import List from "./menuList";

export const Header = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
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
              <Link to="/login">login</Link>
            </div>
          )}
        </div>
      </form>
    </>
  );
};
