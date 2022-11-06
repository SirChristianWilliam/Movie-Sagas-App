import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@mui/system';

function MovieList() {
    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <>
            <Container>
                <main>
                    <h1>MovieList</h1>
                    <Grid container >
                        {/* xs={3} sm={6} md={12} */}
                        <Grid  >
                            <section className="movies">

                                {movies.map(movie => {

                                    return (
                                        <div key={movie.id}>
                                            <h3>{movie.title}</h3>
                                            <Paper >
                                                <img
                                                    src={movie.poster}
                                                    alt={movie.title}
                                                    onClick={() => {
                                                        history.push(`/${movie.id}`)
                                                    }
                                                    }
                                                />
                                            </Paper>
                                        </div>

                                    );
                                })}

                            </section>
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </>
    );
}

export default MovieList;