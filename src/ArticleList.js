import { Link } from 'react-router-dom';
import './css/index.css';
import './css/Articles.css';
import Filter from './Filter';
import useFetch from './useFetch';

const ArticleList = ({ articles }) => {
    const { data, error, isLoading } = useFetch('/topics');
    const topics = data ? data.topics : [];

    if (isLoading) {
        return <div>Loading topics...</div>;
    }

    if (error) {
        return <div>Error fetching topics: {error.message}</div>; 
    }

    return (
        <div className="home">
            <Filter topics={topics} />
            {
                articles.map(article => (
                    <div className="article-preview" key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>
                            <h2>{article.title}</h2>
                            <p>Written by: {article.author}</p>
                            <p>Topic: {article.topic}</p>
                            <p>Published on: {new Date(article.created_at).toLocaleDateString()}</p>
                            <p>Votes: {article.votes}</p>
                            <p>Comment Count: {article.comment_count}</p>
                            <p>{article.body}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default ArticleList;
