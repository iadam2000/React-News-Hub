import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchHandler } from './api';
import ArticleList from './ArticleList';
import Navbar from './Navbar';

const TopicArticles = () => {

    //Extract topic from URL
    const location = useLocation(); 
    const query = new URLSearchParams(location.search);
    const topic = query.get('topic');
    const sort = query.get('sort_by');
    const order = query.get('order');


    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setIsLoading(true);
                const response = await fetchHandler(`/articles?topic=${topic}`);
                setArticles(response.articles);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, [topic]);

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
