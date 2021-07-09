import React from "react";
import axios from "axios";
import GoogleLogin from "./../../Google/google";
import login from "../login/login.css";

const projectID = '25237e63-d052-4459-a86e-631bba96f16d';

const User = () => {
  let name;
  let email;
  let password;
  let username;

  
  const createUser = (e) => {
    e.preventDefault();
    const register = { name, email, password, username };
    axios
      .post(`http://localhost:5000/user/register`, register)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });



    const data = { 'username': username, 'secret': password,'email': email,};

  
    var config = {
        method: 'post',
        url: 'https://api.chatengine.io/users/',
        headers: {
            'PRIVATE-KEY': 'f82e6cd5-77cd-4644-8702-be71c8da4a9f',
        },
        data : data
    };
    
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
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
                  name = e.target.value;
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
                  email = e.target.value;
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
                  password = e.target.value;
                }}
              />
            </div>
            <div class="forms_field">
              <input
                type="username"
                placeholder="username"
                class="forms_field-input input-login-reg"
                required
                onChange={(e) => {
                  username = e.target.value;
                }}
              />
            </div>
            
          </fieldset>
          <div class="forms_buttons">
            <button onClick={createUser} class="forms_buttons-action">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default User;




