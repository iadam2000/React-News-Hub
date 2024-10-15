import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Filter({ topics }) {
    const [selectedTopic, setSelectedTopic] = useState("");
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        console.log("Clicked")
       // const selectedValue = event.target.value;
        setSelectedTopic(event.target.value);

        if (event.target.value) {
            navigate(`/articles?topic=${event.target.value}`);
        }
    };

    return (
        <div className="topic-selector">
            <label htmlFor="topics">Choose a topic:</label>
            <select id="topics" name="topics" value={selectedTopic} onChange={handleSelectChange}>
                <option value="">--Select a topic--</option>
                {topics.map((topic) => (
                    <option key={topic.slug} value={topic.slug}>
                        {topic.description}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
