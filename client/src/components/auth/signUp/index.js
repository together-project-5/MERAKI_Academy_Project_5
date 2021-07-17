import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const projectID = "25237e63-d052-4459-a86e-631bba96f16d";

const User = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const createUser = (e) => {
    e.preventDefault();
    const register = { name, email, password, username };
    axios
      .post(`${process.env.REACT_APP_BACKEND_SERVER}/user/register`, register)
      // .then((res) => {
      //   setMessage(res.data);
      // })
      .catch((err) => {
        throw err;
      }); 

    const data = { username: username, secret: password, email: email };

    var config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": "f82e6cd5-77cd-4644-8702-be71c8da4a9f",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        throw error;
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div class="forms_field">
              <input
                type="username"
                placeholder="username"
                class="forms_field-input input-login-reg"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <div class="forms_buttons">
            <button onClick={createUser} class="forms_buttons-action">
              Sign up
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
