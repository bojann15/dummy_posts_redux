import { combineReducers } from 'redux';
import { postsReducer, postReducer, commentsReducer } from './postReducers';

export const reducers = combineReducers({ posts: postsReducer, post: postReducer, comments: commentsReducer });