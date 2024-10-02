import useFetch from './useFetch';
import './css/Comments.css';
import { useState, useEffect } from 'react';
import { deleteHandler } from './api';

const Comments = ({ id }) => {

    const { data, error, isLoading } = useFetch(`/articles/${id}/comments`, [id]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (data && data.comments) {
            setComments(data.comments);
        }
    }, [data]);

    const handleSubmit = async (commentId, e) => {
        e.preventDefault();

        const commentToDelete = comments.find(comment => comment.comment_id === commentId);

        if (commentToDelete && commentToDelete.author !== "cooljmessy") {
            alert("You are not the owner of this comment.");
            return;
        }

        try {
            await deleteHandler(`/comments/${commentId}`);
            const updatedComments = comments.filter(comment => comment.comment_id !== commentId);
            setComments(updatedComments);  
        } catch (error) {
            console.error("Failed to delete comment:", error);
        }
    };

    return (
        <div className="comments-container">
            {isLoading && <div className='spinner'>Loading...</div>}
            {error && <div>{error}</div>}
            {comments && comments.map(comment => (
                <div key={comment.comment_id} className="comment-card">
                    <p>{comment.body}</p>
                    <div className="comment-details">
                        <p><strong>Author:</strong> {comment.author}</p>
                        <p><strong>Votes:</strong> {comment.votes}</p>
                        <p><strong>Created at:</strong> {new Date(comment.created_at).toLocaleString()}</p>
                    </div>
                    <button onClick={(e) => handleSubmit(comment.comment_id, e)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Comments;
