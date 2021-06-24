import React from 'react';
import { Route } from 'react-router-dom';
import Login from "./components/auth/login/index";
import ShowPosts from './components/post'

const App = () => {
	return <>
	<div className="App">App component</div>;
	<Route path='main' component={ShowPosts}/>
	<Route path="/login" component={Login} />
</>
};

export default App;
