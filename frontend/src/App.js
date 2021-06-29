import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
import CreatePosts from "./components/post/postCreate";
import Register from "./components/auth/signUp/index";
import GetPost from "./components/main/post";
import { Header } from "./components/header/index";
import Main from "./components/main/index";
import postList from "./components/main/postList";


const App = () => {
  return (
    <>
      <Route path="/" component={Header} />
      <Route path="/main" component={Main} />
      <Route exact path="/" component={GetPost} />
      <Route path="/login" component={Login} />
      <Route path="/createPost" component={CreatePosts} />
      <Route path="/register" component={Register} />
      <Route path="/post" component={postList} />
    </>
  );
};

export default App;
