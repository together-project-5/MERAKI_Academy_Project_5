import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
