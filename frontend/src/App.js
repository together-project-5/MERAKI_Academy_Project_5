import React from 'react';
import { Route } from 'react-router-dom';
import ShowPosts from './components/post'

const App = () => {
	return <>
	<div className="App">App component</div>;
	<Route path='main' component={ShowPosts}/>
</>
};

export default App;
