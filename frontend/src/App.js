import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
import Register from "./components/register/index";
import { Header } from "./components/header/index";

function App() {
  return (
    <div className="App">
      <p>welcome </p>
      <Route exact path="/" component={Header} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
