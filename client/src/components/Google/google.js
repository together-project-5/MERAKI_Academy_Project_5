import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Google = () => {
  const history = useHistory();

  const responseGoogle = (response) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_SERVER}/login-google`, {
        token: response.tokenId,
      })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", result.data.user);

        console.log("result",result);
      });
    history.push("/");
  };

  
  return (
    <div>
      <GoogleLogin
        clientId="700589332118-kt5mljv27k4g61a5c75qp5fpojdmk6ip.apps.googleusercontent.com"
        buttonText="Continue With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Google;
