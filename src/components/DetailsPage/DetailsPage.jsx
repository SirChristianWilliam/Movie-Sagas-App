
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';

function DetailsPage() {
    const dispatch = useDispatch();
    const params = useParams(); //Params are page ID for that movie
    const movie = useSelector(store => store.movies.find((movie) => movie.id == params.id));
    const details = useSelector(store => store.movieDetails);
    const history = useHistory();
    console.log(params,"WHAT ARE THE PARAMS!?!?!");
    useEffect(() => {
        fetchGenres();
    }, [params.id]);

    function fetchGenres() {
        console.log('in fetchGenres')
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