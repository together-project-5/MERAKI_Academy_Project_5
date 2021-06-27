import React, { useState, useEffect } from "react";
import axios from "axios";
import "./signUp.css";
import GoogleLogin from "./../../Google/google";

const User = () => {
  let name;
  let email;
  let password;
  let age;
  let gender;

  const createUser = () => {
    axios
      .post(`http://localhost:5000/user/register`, {
        name,
        email,
        password,
        age,
        gender,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="register-body">
        <div className="register">
          <h3>Register</h3>
          <input
            className="input"
            type="text"
            placeholder="Full Name"
            //   aria-label=""

            onChange={(e) => {
              name = e.target.value;
            }}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              email = e.target.value;
            }}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              password = e.target.value;
            }}
          />
          <input
            className="input"
            type="number"
            placeholder="Age"
            onChange={(e) => {
              age = e.target.value;
            }}
          />
          <select
            className="register-select"
            name="Gender"
            onChange={(e) => {
              gender = e.target.value;
            }}
          >
            <option>Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {/* <br/> */}
          <button className="register-button" onClick={createUser}>
            Sign Up
          </button>
          <br />
          <GoogleLogin />
          <br />
        </div>
      </div>
    </>
  );
};
export default User;
