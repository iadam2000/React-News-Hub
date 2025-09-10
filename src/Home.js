import './css/index.css';
import ArticleList from './ArticleList';
import useFetch from './useFetch';
import Navbar from './Navbar';
import './css/spinner.css'; // Import the new spinner CSS

const Home = () => {
    const { isLoading, data, error } = useFetch('/articles');
    
    // Conditionally render the spinner
    if (isLoading) {
        return (
            <div className='spinner-container'>
                <div className='spinner'></div>
            </div>
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
