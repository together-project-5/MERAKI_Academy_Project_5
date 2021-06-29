import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { setToken, setUser } from "./../../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import login from "./login.css";
import GoogleLogin from "../../Google/google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return (
      {
        token: state.login.token,
      },
      {
        user: state.login.user,
      }
    );
  });
  const cheakLogin = () => {
    const login = { email, password };
    axios.post(`http://localhost:5000/user/login`, login).then((response) => {
      console.log("res :  ", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user);
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
      if (response.data.message !== "valid login") {
        setMessage(response.data);
      } else {
        history.push("/");
      }
    });
  };

  return (
    <>
      <div className="loginBody">
        <div className="loginMain">
          <h3>Login</h3>
          <TextField
            type="email"
            placeholder="email here"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            type="password"
            placeholder="password here"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="loginButton" onClick={cheakLogin}>
            Login
          </button>
          {message && <div>{message}</div>}

          <p className="registration">
            If you don't have account ?{" "}
            <Link to="/register">
              {" "}
              <br />
              Sign up here
            </Link>
            <br />
            or
            <br />
            <GoogleLogin />
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
