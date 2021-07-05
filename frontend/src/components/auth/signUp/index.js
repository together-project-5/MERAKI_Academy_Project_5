import React from "react";
import axios from "axios";
import GoogleLogin from "./../../Google/google";
import login from "../login/login.css";

const User = () => {
  let name;
  let email;
  let password;

  const createUser = (e) => {
    e.preventDefault();
    const register = { name, email, password };
    axios
      .post(`http://localhost:5000/user/register`, register)
      .then((res) => {
        console.log(res);
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
              <input type="text" placeholder="Full Name" class="forms_field-input" required
                onChange={(e) => { name = e.target.value }} />
            </div>
            <div class="forms_field">
              <input type="email" placeholder="Email" class="forms_field-input" required
                onChange={(e) => { email = e.target.value }} />
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" class="forms_field-input" required
                onChange={(e) => { password = e.target.value }} />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <button onClick={createUser} class="forms_buttons-action,btn" >Register</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default User;
