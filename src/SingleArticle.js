import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Comments from './Comments';
import "./css/Single-Article.css";
import Vote from './Vote';
import PostComment from './PostComment';

const SingleArticle = () => {

    const { id } = useParams();
    const { data, error, isLoading } = useFetch(`/articles/${id}`);
    const article = data.article

    return (
        <div className="Single-article">
            {isLoading && <div className='spinner'>Loading...</div>}
            {error && <div>{error}</div>}
            {data.article && (
                <div className='single-article-view'>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                    <img src={article.article_img_url} alt={article.title} />
                    <div className="article-details">
                        <p><strong>Author:</strong> {article.author}</p>
                        <p><strong>Topic:</strong> {article.topic}</p>
                        <p><strong>Created at:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
                    </div>
                    <Vote id={article.article_id} initialVotes={article.votes} />

                    <div className='comments-larger-container'>
                    <Comments id={article.article_id} />
                    <PostComment id={article.article_id}/>
                    </div>

                </div>)}
        </div>
    );
};

export default SingleArticle;