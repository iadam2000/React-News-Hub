import { useState } from "react";
import { postHandler } from './api';

const PostComment = ({ id }) => {

    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {

        const endpoint = `/articles/${id}/comments`;
        const body = {
            "username": "cooljmessy",
            "body": comment
        };
        
        e.preventDefault();
        await postHandler(endpoint, body).then(data => {
            setTimeout(() => {
                window.location.reload();  // Refresh the page after a delay
            }, 0);
        })
                
    };

    return (
        <div className='post-comment-container'>
            <h2>Add a new comment</h2>
            <form onSubmit={handleSubmit}>
                <label>Comment: </label>
                <input
                    type="text"
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button>Post</button>
            </form>
        </div>
    );
};

export default PostComment;

