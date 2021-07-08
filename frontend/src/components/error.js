import React from "react";
import { NavLink } from "react-router-dom";
import "./erorr.css";
import { useHistory } from "react-router-dom";

const Erorr = () => {
  const history = useHistory();

  const back = () => {
    history.push("/");
  };
  
  return (
    <>
      <div>
        <img
          className="img-err"
          src="https://uicookies.com/wp-content/uploads/2020/04/Colorlib-404-v18.jpg"
        />{" "}
        <button className="button-err" onClick={back}>
          {" "}
          Back to homepage
        </button>
      </div>
    </>
  );
};
export default Erorr;
