import { fetchArticleList } from './api';
import { useState, useEffect } from 'react';
import './index.css';
import ArticleList from './ArticleList';

const Home = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const articlesData = await fetchArticleList();
                setArticles(articlesData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error caught:", error);
            }
        };
        fetchArticles();
    }, []);

    if (isLoading) {
        return (
            <p>
                Loading
            </p>
        );
    }

    return (
        <div className="home">
            <ArticleList articles={articles} />
        </div>
    );
};

export default Home;