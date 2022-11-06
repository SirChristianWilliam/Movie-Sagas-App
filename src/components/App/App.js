import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';
import AddMoviePage from '../AddMoviePage/AddMoviePage';
import CardHeader from '@mui/material/CardHeader';

function App() {
  return (
    <div className="App">
      
      <header id="header">
      <h1 className='netclips'>
        <span className="N">N</span>
        <span className="e">e</span>
        <span className="t">t</span>
        <span className="c">c</span>
        <span className="l">l</span>
        <span className="i">i</span>
        <span className="p">p</span>
        <span className="s">s</span>
        
        </h1>
      </header>
      
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
