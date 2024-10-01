import React, { useState, useEffect } from 'react';
import { patchHandler } from './api';
import './css/Vote.css';

const Vote = ({ id, initialVotes }) => {
    const endpoint = `/articles/${id}`;
    const [votes, setVotes] = useState(initialVotes);
    const [isVoting, setIsVoting] = useState(false);
    const [error, setError] = useState(null);

    const handleVote = async (value) => {

        setVotes((prevVotes) => prevVotes + value);
        setIsVoting(true);

        try {
            await patchHandler(endpoint, { inc_votes: value });
            setIsVoting(false);
            setError(null);
        } catch (err) {
            setVotes((prevVotes) => prevVotes - value);
            setIsVoting(false);
            setError("Failed to update votes. Please try again.");
        }
    };

    return (
        <div className="vote-container clearfix">
            <button className="vote-button-downvote" onClick={() => handleVote(-1)} disabled={isVoting}>
                -
            </button>
            <div className="votes-display">{votes}</div>
            <button className="vote-button-upvote" onClick={() => handleVote(1)} disabled={isVoting}>
                +
            </button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Vote;
