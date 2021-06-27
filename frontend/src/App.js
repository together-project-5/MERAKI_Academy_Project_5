import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
import ShowPosts from "./components/post";
import CreatePosts from "./components/post/postCreate";
import Register from "./components/auth/signUp/index";

const App = () => {
  return (
    <>
      <Route path="main" component={ShowPosts} />
      <Route path="/login" component={Login} />
      <Route path="/createPost" component={CreatePosts} />
      <Route path="/register" component={Register} />
    </>
  );
};

export default App;
