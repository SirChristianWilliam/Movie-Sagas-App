import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function expandMovie(event) {
        console.log('yo',event)
    }
    const handleSubmit = (event) => {
         console.log('event is',event.target)
        console.log('in MovieList handleSubmit');
        history.push('/details');
    };

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                <form onClick={handleSubmit}>
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>

                            <img 
                                src={movie.poster} 
                                alt={movie.title}
                                onClick={expandMovie}
                               
                                />
                        </div>
                    );
                })}
                </form>
            </section>
        </main>

    );
}

export default MovieList;