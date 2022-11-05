
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory, useParams  } from 'react-router-dom';


// import FavoriteItem from "../FavoriteItem/FavoriteItem";

function DetailsPage() {
    const dispatch = useDispatch();
    const params = useParams();
    const movie = useSelector(store => store.movies.find((movie)=>movie.id==params.id));
    const history = useHistory();
    // const [theMovie, setTheMovie] = useState();
    // function selectedMovie() {
    //     console.log('in selectedMovie');
    //     for(let movie of movies) {
    //         if(movie.id == params.id) {
    //             return movie;
    //         }
    //     }
    // }

     useEffect(() => {
        //fetch
        // setTheMovie(selectedMovie());
    },[params.id])
    // dispatch({
    //     type: 'GET_ONE_MOVIE',
    //     payload: {
    //         movieId: movieId,
    //         genreId: details
    //     }
    // })
    const backToList = (event) => {
        console.log('in backToList');
        history.push('/')
    }
    return (
        <>
            <h1>details page</h1>
            <img 
                src={movie.poster}
            />
            <p> {movie.title} </p>
            <p> {movie.description}</p>
            {/* <p> {movie.genre}</p> */}
            <button
                onClick={backToList}>Back to list</button>
        </>
    )
}

export default DetailsPage;