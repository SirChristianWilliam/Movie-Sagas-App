
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';

function DetailsPage() {
    const dispatch = useDispatch();
    const params = useParams();
    const movie = useSelector(store => store.movies.find((movie) => movie.id == params.id));
    const details = useSelector(store => store.movieDetails);
    const history = useHistory();

    useEffect(() => {
        fetchGenres();

    }, [params.id]);

    function fetchGenres() {
        console.log('in fetchDetails ')
        dispatch({
            type: 'FETCH_DETAILS',
            payload: params.id //was 'GET_GENRES'
        })
    }

    return (
        <>
            <h1>details page</h1>
            <img
                src={movie.poster}
                alt={movie.title}
            />
            <p> {movie.title} </p>
            <p> {movie.description}</p>
            {details.map(detail => (
                <p key={detail.genre}> {detail.genre} </p>
            ))}
            <button
                onClick={() => (history.push('/'))}>Back to list</button>
        </>
    )
}

export default DetailsPage;