import React from 'react';
import { Route } from 'react-router-dom';
import Login from "./components/auth/login/index";
<<<<<<< HEAD
import ShowPosts from './components/post'
import CreatePost from './components/post/postCraete'

const App = () => {
	return <>
	<Route path='main' component={ShowPosts}/>
	<Route path="/login" component={Login} />
	<Route path="/createPost" component={CreatePost} />
</>
};
=======
import Register from "./components/register/index";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
	  <Route path="/register" component={Register} />
    </div>
  );
}
>>>>>>> 7e3f9a991154998fa5ff098272c52ad53b764d60

export default App;
