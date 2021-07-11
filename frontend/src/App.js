import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
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
import Erorr from "./components/404/error";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminBoard from "./components/admin/admin";
import Chat from "./chat";
import PrimarySearchAppBarc from "./components/header/menuchat";
import google from "./components/Google/google"

const App = () => {
  const token = useSelector((state) => {
    return {
      token: state.login.token,
      user: state.login.user,
    };
  });
  console.log("aaaaaaaaaaa", token.user);
  
  if (token.user) {
    return (
      <>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Main} />
        <Route path="/Chat" component={PrimarySearchAppBarc} />

        <Switch>
          <Route exact path="/" component={GetPost} />
          <Route path="/profile" component={MyProfile} />
          <Route path="/google" component={google}/>
          <Route exact path="/Chat" component={Chat} />
          <Route path="/admin" component={AdminBoard} />
          <Route path="/sign" component={Login} />
          <Route path="/archive" component={Archive} />
          <Route path="/favorite" component={GetFavorites} />
          <Route path="/post" component={postList} />
          <Route path="/createPost" component={Upload} />
          <Route path="/editProfile" component={EditProfile} />
          <Route path="/editPost" component={EditPost} />
          <Route component={Erorr} />
          <Route path="/admin" component={AdminBoard} />
        </Switch>
      </>
    );
  } else {
    return (
      <>
        <Route path="/sign" component={Login} />
      </>
    );
  }
};

export default App;
