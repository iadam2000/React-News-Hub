import './index.css';

const ArticleList = ({articles}) => {
    return (
        <div className="home">
            {
                articles.map(article =>
                    <div className="article-preview" key={article.article_id}>
                        <h2>{article.title}</h2>
                        <p>Written by: {article.author}</p>
                    </div>
                )
            }
        </div>
    );
};

export default ArticleList;