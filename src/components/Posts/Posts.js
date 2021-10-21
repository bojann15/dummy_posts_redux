import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/postActions';
import Post from './Post/Post';

const Posts = () => {
    const posts = useSelector((state) => state.postsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <div className="posts">
            {posts?.data?.map((post) => {
                return (
                    <Post key={post.id} post={post} />
                )
            })}
        </div>
    )
};
export default Posts;