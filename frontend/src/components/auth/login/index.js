import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { setToken, setUser } from "./../../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import login from "./login.css";
import GoogleLogin from "../../Google/google";
import User from "../signUp/index"

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
  const checkLogin = (e) => {
    e.preventDefault();
    const login = { email, password };
    axios.post(`http://localhost:5000/user/login`, login).then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("_IdUser", response.data.user._IdUser);
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
      if (response.data.message !== "valid login") {
        setMessage(response.data);
      } else {
        history.push("/");
      }
    });
  };

  const signupButton = document.getElementById('signup-button'),
    userForms = document.getElementById('user_options-forms'),
    loginButton = document.getElementById('login-button')

  const register = () => {
    userForms.classList.remove('bounceRight')
    userForms.classList.add('bounceLeft')
  }

  const loginA = () => {
    userForms.classList.remove('bounceLeft')
    userForms.classList.add('bounceRight')
  }

  return (
    <>
      <section class="user">
        <div class="user_options-container">
          <div class="user_options-text">
            <div class="user_options-unregistered">
              <h2 class="user_unregistered-title">Don't have an account?</h2>
              <p class="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
              <button class="user_unregistered-signup" id="signup-button" onClick={register}>Sign up</button>
            </div>

            <div class="user_options-registered">
              <h2 class="user_registered-title">Have an account?</h2>
              <p class="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
              <button class="user_registered-login" id="login-button" onClick={loginA}>Login</button>
            </div>
          </div>
          <div class="user_options-forms" id="user_options-forms">
            <div class="user_forms-login">
              <h2 class="forms_title">Login</h2>
              <form class="forms_form">
                <fieldset class="forms_fieldset">
                  <div class="forms_field">
                    <input type="email" placeholder="Email" class="forms_field-input" required autofocus
                      onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div class="forms_field">
                    <input type="password" placeholder="Password" class="forms_field-input" required
                      onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </fieldset>
                <div class="forms_buttons">
                  <button class="forms_buttons-action" onClick={checkLogin} >Log In</button>
                </div><br/><br/><br/>
                  <GoogleLogin />
              </form>
            </div>
            <div class="user_forms-signup">
                <User/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
