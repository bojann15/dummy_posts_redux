import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPost, getPosts } from '../../actions/postActions';

const CreatePost = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [post, setPost] = useState({ text: "", image: "", likes: 0, tags: [], owner: "" });
    const clear = () => {
        setPost({ text: "", image: "", likes: 0, tags: [], owner: "" });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPost({ ...post }));
        dispatch(getPosts());
        clear();
        history.push('/');
    };

    return (
        <div className="create_post">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="text">Title</label>
                    <input type="text" name="text" id="text" required value={post.text} onChange={(e) => setPost({ ...post, text: e.target.value })} />
                </div>
                <div className="row">
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" id="image" required value={post.image} onChange={(e) => setPost({ ...post, image: e.target.value })} />
                </div>
                <div className="row">
                    <label htmlFor="likes">Likes</label>
                    <input type="number" min="0" name="likes" id="likes" required value={post.likes} onChange={(e) => setPost({ ...post, likes: e.target.value })} />
                </div>
                <div className="row">
                    <label htmlFor="tags">Tags</label>
                    <input type="text" name="tags" id="tags" required value={post.tags} onChange={(e) => setPost({ ...post, tags: e.target.value.split(',') })} />
                </div>
                <div className="row">
                    <label htmlFor="owner">Owner</label>
                    <input type="text" name="owner" id="owner" required value={post.owner} onChange={(e) => setPost({ ...post, owner: e.target.value })} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
};
export default CreatePost;