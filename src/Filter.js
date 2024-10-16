import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Filter({ topics }) {

    const [selectedTopic, setSelectedTopic] = useState("");
    const [selectedOrder, setSelectedOrder] = useState("created_at-desc");

    const navigate = useNavigate();

    const handleSelectChangeTopic = (event) => {
        setSelectedTopic(event.target.value);
        if (event.target.value) {
            navigate(`/articles?topic=${event.target.value}`);
        }
    };

    const handleSelectChangeOrder = (event) => {

        const sortBy = event.target.value.split("-")[0];
        const order = event.target.value.split("-")[1];

        if (event.target.value) {
                navigate(`/articles?topic=${selectedTopic}&order=${order}&sort_by=${sortBy}`);
        }
    };

    return (
        <div className="topic-selector">

            <label htmlFor="topics"></label>

            <select id="topics" name="topics" value={selectedTopic} onChange={handleSelectChangeTopic}>
                <option value="">Topic</option>
                {topics.map((topic) => (
                    <option key={topic.slug} value={topic.slug}>
                        {topic.description}
                    </option>
                ))}
            </select>

            <label htmlFor="order"></label>

            <select id="order" name="order" value={selectedOrder} onChange={handleSelectChangeOrder}>
                <option value={selectedOrder}>Sort By</option>
                <option value="votes-asc">Votes ↑</option>
                <option value="votes-desc">Votes ↓</option>
                <option value="created_at-asc">Date ↑</option>
                <option value="created_at-desc">Date ↓</option>
                <option value="comment_count-asc">Comment Count ↑</option>
                <option value="comment_count-desc">Comment Count ↓</option>
            </select>

        </div>
    );
}

export default Filter;
