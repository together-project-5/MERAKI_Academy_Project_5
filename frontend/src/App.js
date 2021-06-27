import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
import CreatePosts from "./components/post/postCreate";
import Register from "./components/auth/signUp/index";
import GetPost from "./components/main/post"

const App = () => {
  return (
    <>
      <Route path="/login" component={Login} />
      <Route path="/createPost" component={CreatePosts} />
      <Route path="/register" component={Register} />
      <Route path="/register" component={Register} />
      <Route path="/" component={GetPost} />
    </>
  );
};

export default App;
