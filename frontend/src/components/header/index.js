import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./header.css";
import axios from "axios";
import List from "./menuList";
let search = "";
export const Header = () => {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/")
  };

  const searchPost = (e) => {
    axios.get(
      `http://localhost:5000/post/title/${search}`
    ).then((res) => {
      console.log("res", res.data);
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div className="navBar">
          <div className="headerLeftNavBar">
            <p onClick={handleClick} className="websiteName">
              website name
            </p>
          </div>

          {localStorage.getItem("token") ? (
            <div className="headerLeftNavBar">
              <input
                className="headerSearch-bar"
                onChange={(e) => {
                  search = e.target.value;
                }}
                placeholder="Search"
              />
              <button
                className="headerSearch-button"
                onClick={(e) => {
                  searchPost();
                }}
              >search</button>
              {/* <img src=(url) /> */}
              <p className="display-name">{`Welcome,user`}</p>
              <List />
            </div>
          ) :
            (
              <div className="headerRightNavBar">
                <Link to="/login">login</Link>
              </div>
            )
          }
          <Link to="/favorite">favorite</Link>
        </div>
      </form>

    </>
  );
};