import { FETCH_ALL, CREATE, UPDATE, GET_COMMENTS, GET_POST, CREATE_COMMENT } from '../constants/postConstants';
export const postsReducer = (posts = [], action) => {
    switch (action.type) {
        case UPDATE:
            return posts.map((post) => post.id === action.payload.id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
};
export const postReducer = (post = [], action) => {
    switch (action.type) {
        case GET_POST:
            return action.payload;
        default:
            return post;
    }
};

export const commentsReducer = (comments = [], action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return action.payload;
        case CREATE_COMMENT:
            return [...comments, action.payload];
        default:
            return comments;
    }
};