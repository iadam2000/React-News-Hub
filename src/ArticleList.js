import { Link } from 'react-router-dom';
import './css/index.css';
import './css/Articles.css';
import Filter from './Filter';
import useFetch from './useFetch';
import Vote from './Vote';
import { timeSincePosted } from './api';

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
                        <div className="article-content">
                            <Link to={`/articles/${article.article_id}`}>
                                <div className="title-and-date" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                                    <h2>{article.title}</h2>
                                    <p>{timeSincePosted(article.created_at)}</p>
                                </div>
                                <p>{article.body.length > 500 ? `${article.body.substring(0, 500)}...` : article.body}</p>
                            </Link>
                            <div className="vote-and-image">
                                <Vote id={article.article_id} initialVotes={article.votes} />
                                <img src={article.article_img_url} alt={article.title} style={{
                                    height: 200,
                                    width: 200,
                                    borderRadius: '5%',
                                    objectFit: 'cover',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    marginRight: '10px'
                                }} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ArticleList;
