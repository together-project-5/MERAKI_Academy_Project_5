import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
import Register from "./components/auth/signUp/index";
import GetPost from "./components/main/post";
import { Header } from "./components/header/index";
import GetFavorites from "./components/favorite/favorite";
import Main from "./components/main/index";
import Archive from "./components/archive/index";
import postList from "./components/main/postList";
import Upload from './components/upload'


const App = () => {
  return (
    <>
      <Route path="/" component={Header} />
      <Route path="/main" component={Main} />
      <Route exact path="/" component={GetPost} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/archive" component={Archive} />
      <Route path="/favorite" component={GetFavorites} />
      <Route path="/post" component={postList} />
      <Route path="/createPost" component={Upload} />
    </>
  );
};

export default App;
