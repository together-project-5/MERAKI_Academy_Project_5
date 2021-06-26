import { createStore, combineReducers } from 'redux';
import login from "./login";
import posts from './post';

const reducers = combineReducers({ login,posts });
const store = createStore(reducers);

export default store
