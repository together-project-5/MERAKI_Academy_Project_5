import React from "react";
import { Route } from "react-router-dom";
import Register from "./components/register/index";

const App = () => {
  return (
    <div className="App">
      <p>hi</p>
      <Route path="/register" component={Register} />
    </div>
  );
};

export default App;
