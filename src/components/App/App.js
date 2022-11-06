import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';
import AddMoviePage from '../AddMoviePage/AddMoviePage';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page, which will
          show the movie and the detail for
          that specific movie*/}

        <Route path="/:id" exact>
        <DetailsPage 
          />
        </Route>

        {/* Add Movie page */}
        <Route path="/add">
          <AddMoviePage />
        </Route>

      </Router>
    </div>
  );
}


export default App;
