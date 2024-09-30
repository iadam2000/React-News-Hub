import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewArticle from './NewArticle';
import SingleArticle from './SingleArticle';
import Endpoints from './Endpoints';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <NewArticle />
            </Route>
            <Route path="/articles/:id">
              <SingleArticle />
            </Route>
            <Route path='/endpoints'>
              <Endpoints/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
