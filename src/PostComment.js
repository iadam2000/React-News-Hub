import { useState } from "react";
import { postHandler } from './api';

const PostComment = ({ id }) => {

    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {

        const endpoint = `/articles/${id}/comments`;
        const body = {
            "username": "cooljmessy",
            "body": comment
        };

            postHandler(endpoint, body)
                
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