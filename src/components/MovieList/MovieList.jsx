import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Container } from '@mui/system';
import Card from '@mui/material/Card';

function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies); //Goes to redux store in index.js
    // and locates the current value of 'movies'
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' }); // Takes us to line 16 of index.js
    }, []);

    return (
        <>
            <Container>
                <main>
                    {/* <br> could easily just be a margin or padding as well */}
                    <br></br><br></br><br></br><br></br>
                    <Grid container spacing={1}>
                        <Grid >
                            <section className="movies">
                                <Card
                                    sx={{ bgcolor: '#161313', color: 'rgb(200 176 176)', }}
                                    elevation={6} className="moviesCard">
                                    {/* For mapping, 'movies' take the value of the variable at line 11 above, which came from the 
                    index redux store */}
                                    {movies.map(movie => {
                                        return (
                                            <div key={movie.id}>
                                                <h3>{movie.title}</h3>
                                                <Card elevation={6} sx={{ p: 2, bgcolor: '#a497b240' }}>
                                                    <img
                                                        className='moviesImages'
                                                        src={movie.poster} // As we loop through the whole array of movies,
                                                        // we will display each individual item associated with the values
                                                        // of its key (line 35). 'movie.poster' is that individual key's source name
                                                        alt={movie.title}
                                                        onClick={() => {
                                                            history.push(`/${movie.id}`)
                                                            } // onClick calls itself when clicked, and takes us to a new page
                                                            // with a url that ends in that movie's specific id. This way, the movie 
                                                            //page is created, essentially, on click. This allows a dynamic web page
                                                            // in case we don't know what urls we will need in the future, especially 
                                                            // if there is an 'add movie' form involved. 
                                                        }
                                                    />
                                                </Card>
                                            </div>
                                        );
                                    })};
                                </Card>
                            </section>
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </>
    );
};

export default MovieList;