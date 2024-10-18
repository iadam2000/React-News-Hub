import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Home';
import SingleArticle from './SingleArticle';
import Endpoints from './Endpoints';
import TopicArticles from './TopicArticles'; // New component for topic articles

const myRouter = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home />} />
    <Route path='/endpoints' element={<Endpoints />} />
    <Route path='/articles/:id' element={<SingleArticle />} />
    <Route path='/articles' element={<TopicArticles />} />
  </Route>
));

function App() {  
  return (
    <RouterProvider router={myRouter} />
  );
}

export default App;
