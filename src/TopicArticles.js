import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHandler } from './api';
import ArticleList from './ArticleList';

const TopicArticles = () => {
    const { slug } = useParams();
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setIsLoading(true);
                const response = await fetchHandler(`/articles?topic=${slug}`);
                setArticles(response.articles);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, [slug]);

    if (isLoading) {
        return <div>Loading articles about {slug}...</div>;
    }

    if (error) {
        return <div>Error fetching articles: {error}</div>;
    }

    return (
        <div className="topic-articles">
            <h1>Articles about {slug}</h1>
            {articles.length === 0 ? (
                <p>No articles found for this topic.</p>
            ) : (
                <ArticleList articles={articles} />
            )}
        </div>
    );
};

export default TopicArticles;
