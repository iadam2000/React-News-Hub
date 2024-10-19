import { useState } from "react";
import { postHandler } from './api';

const PostComment = ({ id }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        const endpoint = `/articles/${id}/comments`;
        const body = {
            username: "cooljmessy",
            body: comment
        };

        e.preventDefault();
        await postHandler(endpoint, body).then(data => {
            setTimeout(() => {
                window.location.reload();
            }, 0);
        });
    };

    return (
        <div style={{
            maxWidth: '600px',
            margin: '20px 0',
            padding: '50px',
            borderRadius: '30px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
            <h2 style={{
                marginBottom: '15px',
                fontSize: '24px',
                color: '#333'
            }}>Add a new comment</h2>
            <form onSubmit={handleSubmit}>
                <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '16px',
                    color: '#555'
                }}>Comment:</label>
                <input
                    type="text"
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
                        marginBottom: '15px',
                        fontSize: '16px',
                        color: '#333'
                    }}
                />
                <button type="submit" style={{
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '4px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                }}>
                    Post
                </button>
            </form>
        </div>
    );
};

export default PostComment;
