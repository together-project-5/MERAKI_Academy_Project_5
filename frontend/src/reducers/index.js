import { createStore, combineReducers } from 'redux';

import posts from './post';

const reducers = combineReducers({ posts });
const store = createStore(reducers);

export default store