import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost, getPost, getPosts } from '../../actions/postActions';

const EditPost = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const postData = useSelector((state) => state.postReducer);
    const [post, setPost] = useState({ image: '', likes: 0, tags: [], text: "" });

    useEffect(() => {
        dispatch(getPost(id));
        setPost(postData)
    }, [dispatch, id])
    const clear = () => {
        setPost({ image: '', likes: 0, tags: [], text: "" });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updatePost(id, { ...post }));
        dispatch(getPosts());
        clear();
        history.push('/');
    };
    return (
        <div className="create_post">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" id="image" required value={post.image} onChange={(e) => setPost({ ...post, image: e.target.value })} />
                </div>
                <div className="row">
                    <label htmlFor="text">Title</label>
                    <input type="text" name="text" id="text" required value={post.text} onChange={(e) => setPost({ ...post, text: e.target.value })} />
                </div>
                <div className="row">
                    <label htmlFor="tags">Tags</label>
                    <input type="text" name="tags" id="tags" required value={post.tags} onChange={(e) => setPost({ ...post, tags: e.target.value.split(',') })} />
                </div>
                <div className="row">
                    <label htmlFor="likes">Likes</label>
                    <input type="number" min="0" name="likes" id="likes" required value={post.likes} onChange={(e) => setPost({ ...post, likes: e.target.value })} />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    )
};
export default EditPost;