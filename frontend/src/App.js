import React from 'react';
import { Route } from 'react-router-dom';
import Login from "./components/auth/login/index";
import ShowPosts from './components/post'
import CreatePost from './components/post/postCraete'

const App = () => {
	return <>
	<Route path='main' component={ShowPosts}/>
	<Route path="/login" component={Login} />
	<Route path="/createPost" component={CreatePost} />
</>
};

export default App;
