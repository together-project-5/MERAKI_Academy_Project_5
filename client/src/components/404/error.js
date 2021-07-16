import React from "react";
import { NavLink } from "react-router-dom";
import "./erorr.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Erorr = () => {
  const history = useHistory();

  const back = () => {
    history.push("/main");
  };
  
  return (
    <>
      <div className="err-dev">
      
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
