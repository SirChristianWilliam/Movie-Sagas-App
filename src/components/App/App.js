import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';
import AddMoviePage from '../AddMoviePage/AddMoviePage';

function App() {
  return (
    <div className="App">
      <header id="header">
        <h1 className='netclips'>
  {/* The CSS way for targeting each individual letter in a word
   I suppose I could have also done some weird stuff using perspective 
   manipulation, but this was much faster ;) Each span class in stylesheets
   have position:relative, text decoration underline, and their own
   individual top:'px' properties */}
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
{/* Route path="/:id" is the url page it will take us to. The id is known as it
  was passed to the server from the details page as params.id. Since params targets the
  URL, when that information comes back here, the route path also uses that information
  and directs us to the appropriate location*/}
        <Route path="/:id" exact>
          <DetailsPage />
        </Route>

        {/* This will be the component page where you will be able to 
          add a new movie to the list. Currently under construction. */}
        <Route path="/add">
          <AddMoviePage />
        </Route>

      </Router>
    </div>
  )
}


export default App;
