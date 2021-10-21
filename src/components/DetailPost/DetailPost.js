import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, getComments, createComment } from '../../actions/postActions';

const DetailPost = () => {
    const { id } = useParams();
    const history = useHistory();
    const [comment, setComment] = useState({ message: "" });
    const [update, setUpdate] = useState(false);
    const post = useSelector((state) => state.postReducer);
    const comments = useSelector((state) => state.commentsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost(id));
        dispatch(getComments(id))
    }, [dispatch, id, update]);

    const handleEdit = (id) => {
        history.push(`/${id}/edit`)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createComment({ ...comment, owner: post.owner.id, post: post.id }));
        setComment({ message: "" });
        setUpdate(true);
    };
    return (
        <div className="detail">
            <img src={post.image} alt="" />
            <div className="box-detail">
                <h3>{post.text}</h3>
                <h6>#id: {post.id}</h6>
                <p>{post.text}</p>
                <p>Likes: {post.likes}</p>
                <p>Owner: {post?.owner?.firstName} {post?.owner?.lastName}</p>
                <button id="btn_view" onClick={((id) => handleEdit(`${post.id}`))} >
                    Edit
                </button>
            </div>
            {(comments?.data?.length !== 0) && <p id="comments">{`Comments by ${post?.owner?.firstName}:`} {comments?.data?.map((comment) => <span key={comment.id}>{comment.message}</span>)}</p>}
            <p className="tags">{post?.tags?.map((tag) => `#${tag}`)}</p>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <textarea type="text" placeholder="Type comment" name="message" id="message" required rows="5" value={comment.message} onChange={(e) => setComment({ ...comment, message: e.target.value })} />
                </div>
                <button type="submit">Create Comment</button>
            </form>
        </div>
    )
};

export default DetailPost;