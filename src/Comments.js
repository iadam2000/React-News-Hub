import useFetch from './useFetch';
import './css/Comments.css';

const Comments = ({ id }) => {
    const { data, error, isLoading } = useFetch(`/articles/${id}/comments`);
    const comments = data.comments;
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
                </div>
            ))}
        </div>
    );
};

export default Comments;