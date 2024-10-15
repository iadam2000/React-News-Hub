import './css/index.css';
import ArticleList from './ArticleList';
import useFetch from './useFetch';
import Navbar from './Navbar';

const Home = () => {

    const { isLoading, data, error } = useFetch('/articles');
    
    if (isLoading) {
        return (
            <p className='spinner'>
                Loading
            </p>
        );
    }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            <Navbar/>
            {data.articles && <ArticleList articles={data.articles} />}
        </div>
    );
};

export default Home;