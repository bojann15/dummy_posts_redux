import API from '../api/index';
import { CREATE, UPDATE, FETCH_ALL, GET_POST, GET_COMMENTS, CREATE_COMMENT } from '../constants/postConstants';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await API.get('/post');
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (err) {
        console.error(err);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await API.post("/post/create", post);
        dispatch({ type: CREATE, payload: data });
    } catch (err) {
        console.error(err);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await API.put(`/post/${id}`, post);
        dispatch({ type: UPDATE, payload: data });
    } catch (err) {
        console.error(err);
    }
};
export const getPost = (id) => async (dispatch) => {
    try {
        const { data } = await API.get(`/post/${id}`);
        dispatch({ type: GET_POST, payload: data });

    } catch (err) {
        console.error(err);
    }
};
export const getComments = (id) => async (dispatch) => {
    try {
        const { data } = await API.get(`/post/${id}/comment`);
        dispatch({ type: GET_COMMENTS, payload: data });
    } catch (err) {
        console.error(err);
    }
};
export const createComment = (comment) => async (dispatch) => {
    try {
        const { data } = await API.post("/comment/create", comment);
        dispatch({ type: CREATE_COMMENT, payload: data });
    } catch (err) {
        console.error(err);
    }
};