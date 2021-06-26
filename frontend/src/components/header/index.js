
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./header.css";
let search =""
const searchPost =()=>{
	
}
export const Header = () => {
    const history = useHistory();
    const handleSubmit = async (e) => {
    };
    const handleClick = () => {
      history.push("/");
    };
  
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
                 search=e.target.value;
                }}
                placeholder="Search"
              /> 
              <button
                className="headerSearch-button"
                
                onClick={(e) => {
					searchPost();
                }}
              >search</button>
                <p className="display-name">{`Welcome,user`}</p>
                
              </div>
            ) : 
              (<div className="headerRightNavBar">
                <Link to="/login">login</Link>
              </div>
            )}
          </div>
        </form>
        
      </>
    );
  };