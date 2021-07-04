import { createStore, combineReducers } from 'redux';
import login from "./login";
import posts from './post';
import favorites from './favorite'
import archives from './archive'
import comments from './comment'


const reducers = combineReducers({ login, posts, favorites, archives,comments });
const store = createStore(reducers);

export default store
