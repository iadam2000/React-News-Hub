import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import SingleArticle from './SingleArticle';
import Endpoints from './Endpoints';
import TopicArticles from './TopicArticles'; // New component for topic articles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/endpoints' element={<Endpoints />} />
            <Route path='/articles/:id' element={<SingleArticle />} />
            <Route path='/topics/:slug' element={<TopicArticles />} /> {/* Route for topic articles */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
