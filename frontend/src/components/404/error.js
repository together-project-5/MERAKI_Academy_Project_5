import React from "react";
import { NavLink } from "react-router-dom";
import "./erorr.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Erorr = () => {
  const history = useHistory();

  const back = () => {
    history.push("/");
  };
  
  return (
    <>
      <div className="err-dev">
        {/* <img
          className="img-err"
          src="https://uicookies.com/wp-content/uploads/2020/04/Colorlib-404-v18.jpg"
        />{" "}
        <button className="button-err" onClick={back}>
          {" "}
          Back to homepage
        </button> */}
      <div className="err-oops">

        <h1>oops</h1>
      </div>
      <div className="err-exist">

<h4>The page you were looking for doesn't exist</h4>
</div>
<div className="err-moved">

<h4>You may have mistyped the address or the page may have moved</h4>
</div>

<div className="err-page">
<Link to="/">Take me back to the home page</Link>

</div>

        

      </div>
    </>
  );
};
export default Erorr;
