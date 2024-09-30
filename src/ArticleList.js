import { Link } from 'react-router-dom';
import './css/index.css';
import "./css/Articles.css";

const ArticleList = ({ articles }) => {
    return (
        <div className="home">
            {
                articles.map(article =>
                    <div className="article-preview" key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>
                            <h2>{article.title}</h2>
                            <p>Written by: {article.author}</p>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default ArticleList;