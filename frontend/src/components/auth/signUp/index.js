import React, { useState } from "react";
import axios from "axios";
import GoogleLogin from "./../../Google/google";
import login from "../login/login.css";

const User = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const register = { name, email, password };
    axios
      .post(`http://localhost:5000/user/register`, register)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div class="user_forms-signup">
        <h2 class="forms_title">Sign Up</h2>
        <form class="forms_form">
          <fieldset class="forms_fieldset">
            <div class="forms_field">
              <input
                type="text"
                placeholder="Full Name"
                class="forms_field-input input-login-reg"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="forms_field">
              <input
                type="email"
                placeholder="Email"
                class="forms_field-input input-login-reg"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="forms_field">
              <input
                type="password"
                placeholder="Password"
                class="forms_field-input input-login-reg"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <button onClick={createUser} class="forms_buttons-action">
              Register
            </button>
            <br />  
            <br />
            <br />

            {message && <p className="msggg">{message}</p>}
          </div>
        </form>
      </div>
    </>
  );
};
export default User;
