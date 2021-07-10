import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
import Register from "./components/auth/signUp/index";
import GetPost from "./components/main/post";
import { Header } from "./components/header/index";
import GetFavorites from "./components/favorite/favorite";
import Archive from "./components/archive/index";
import postList from "./components/main/postList";
import Main from "./components/main/index";
import MyProfile from "./components/myProfile/index";
import EditProfile from "./components/user/editProfile";
import Upload from "./components/upload/upload";
import EditPost from "./components/editPost/index";
import Erorr from "./components/error";

import {Switch} from "react-router-dom"
import AdminBoard from "./components/admin/admin"


const App = () => {
  return (
    <>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Main} />
    
      <Switch>
      <Route exact path="/" component={GetPost} />
      <Route path="/profile" component={MyProfile} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/archive" component={Archive} />
      <Route path="/favorite" component={GetFavorites} />
      <Route path="/post" component={postList} />
      <Route path="/createPost" component={Upload} />
      <Route path="/editProfile" component={EditProfile} />
      <Route path="/editPost" component={EditPost} />
      <Route path="/admin" component={AdminBoard} />
      <Route component={Erorr} />
      </Switch>
    </>
  );
};

export default App;
