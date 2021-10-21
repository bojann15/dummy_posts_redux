import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { postsReducer, postReducer, commentsReducer } from './reducers/postReducers';
import thunk from 'redux-thunk';

export const reducers = combineReducers({ postsReducer, postReducer, commentsReducer });
const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;