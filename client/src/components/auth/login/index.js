import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { setToken, setUser } from "./../../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import GoogleLogin from "../../Google/google";
import User from "../signUp/index";
import "./login.css"

const projectID = "25237e63-d052-4459-a86e-631bba96f16d";

const Login = () => {
  const [username, setUsername] = useState("");
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
  const checkLogin = (e) => {
    e.preventDefault();
    const login = { username, password };

    axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/user/login`, login).then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
      if (response.data.message !== "valid login") {
        setMessage(response.data);
      } else {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("_IdUser", response.data.user._IdUser);
        history.push("/main");
      }
    });
    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    axios.get("https://api.chatengine.io/chats", { headers: authObject });
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };

  const signupButton = document.getElementById("signup-button"),
    userForms = document.getElementById("user_options-forms"),
    loginButton = document.getElementById("login-button");

  const register = () => {
    userForms.classList.remove("bounceRight");
    userForms.classList.add("bounceLeft");
  };

  const loginA = () => {
    userForms.classList.remove("bounceLeft");
    userForms.classList.add("bounceRight");
  };

  return (
    <>
      <section class="user">
        <div class="user_options-container">
          <div class="user_options-text">
            <div class="user_options-unregistered">
              <h2 class="user_unregistered-title">Don't Have An Account?</h2>
              <p class="user_unregistered-text">
                Welcome To Together Socialmedia Platform
              </p>
              <button
                class="user_unregistered-signup button-login-reg"
                id="signup-button"
                onClick={register}
              >
                Sign up
              </button>
            </div>

            <div class="user_options-registered">
              <h2 class="user_registered-title">Have An Account?</h2>
              <p class="user_registered-text">Sign in Right Now</p>
              <button
                class="user_registered-login button-login-reg"
                id="login-button"
                onClick={loginA}
              >
                Sign in
              </button>
            </div>
          </div>
          <div class="user_options-forms" id="user_options-forms">
            <div class="user_forms-login">
              <h2 class="forms_title">Sign in</h2>
              <form class="forms_form">
                <fieldset class="forms_fieldset">
                  <div class="forms_field">
                    <input
                      type="username"
                      placeholder="email or username"
                      class="forms_field-input input-login-reg"
                      required={true}
                      autofocus
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div class="forms_field">
                    <input
                      type="password"
                      placeholder="Password"
                      class="forms_field-input input-login-reg"
                      required={true}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </fieldset>
                {message&&<p className="messegee">{message}</p>}

                <div class="forms_buttons">
                  <button class="forms_buttons-action" onClick={checkLogin}>
                    Sign In
                  </button>
                </div>
                <br />
                <br />
                <br />
                <div className="login-with-Google">
                  <GoogleLogin className="login-with-Google" />
                </div>
              </form>
            </div>
            <div class="user_forms-signup">
              <User />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
