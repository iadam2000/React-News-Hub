import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchHandler } from './api'; // Not needed since you're using useFetch
import ArticleList from './ArticleList';
import Navbar from './Navbar';
import useFetch from './useFetch';

const TopicArticles = () => {
    // Extract topic from URL
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const topic = query.get('topic');
    const sort = query.get('sort_by') || "created_at"; // Default to created_at
    const order = query.get('order') || "desc"; // Default to desc

    // Use custom hook to fetch articles
    const { data: {articles}, isLoading, error } = useFetch(`/articles?topic=${topic}&order=${order}&sort_by=${sort}`, [sort, order, topic]);

    if (isLoading) {
        return <div>Loading articles about {topic}...</div>;
    }

    if (error) {
        return <div>Error fetching articles: {error}</div>;
    }

    return (
        <div className="topic-articles">
            <Navbar />
            <h1>Articles about {topic}</h1>
            {articles.length === 0 ? (
                <p>No articles found for this topic.</p>
            ) : (
                <ArticleList articles={articles} />
            )}
        </div>
    );
};

export default TopicArticles;
