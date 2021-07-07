import { createStore, combineReducers } from 'redux';
import login from "./login";
import posts from './post';
import favorites from './favorite'
import archives from './archive'
import comments from './comment'
import getPost from './getPost';


const reducers = combineReducers({ login, posts, favorites, archives,comments ,getPost });
const store = createStore(reducers);

export default store
