import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const SingleArticle = () => {

    const { id } = useParams();
    const { data, error, isLoading } = useFetch(`/articles/${id}`);
    const article = data.article
    return (
        <div className="Single-article">
            <p></p>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data.article && (
                <div className='single-article-view'>
                    <h2>{article.title}</h2>
                    <img src={article.article_img_url} alt={article.title} />
                    <p><strong>Author:</strong> {article.author}</p>
                    <p><strong>Topic:</strong> {article.topic}</p>
                    <p><strong>Created at:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
                    <p><strong>Votes:</strong> {article.votes}</p>
                    <p>{article.body}</p>
                </div>)}
        </div>
    );
};

export default SingleArticle;