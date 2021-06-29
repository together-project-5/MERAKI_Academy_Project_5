import { createStore, combineReducers } from 'redux';
import login from "./login";
import posts from './post';
import favorites from './favorite'

const reducers = combineReducers({ login, posts, favorites });
const store = createStore(reducers);

export default store
