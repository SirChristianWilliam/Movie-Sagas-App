
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid';
import { Container } from '@mui/system';
import Card from '@mui/material/Card';

function DetailsPage() {
    const dispatch = useDispatch();
    const params = useParams(); // Params are page ID for that movie
    const movie = useSelector(store => store.movies.find((movie) => movie.id == params.id));
    //Line 13 saves a lot of extra code. It creates a variable 'movie', which goes and looks for
    // 'movies' in the redux store. 'find((movie)' loops through the 'movies' array and only returns
    // the object whose movie.id is the same as the params.id. This will make sure to return just 
    // one object, in this situation.
    const details = useSelector(store => store.movieDetails);
    const history = useHistory();
    console.log("In DetailsPage, the params are:",params); // {id:'7'}, for example
    useEffect(() => {
        fetchGenres();
    }, [params.id]); 

    function fetchGenres() {
        console.log('in fetchGenres')
        dispatch({
            type: 'FETCH_DETAILS', // To line 17 in index.js
            payload: params.id // {id:'7'}, or whatever the id of the clicked on image is
        })
    };

    return (
        <>
            <Container
                sx={{ width: '50%', pb:16 }}
                className="detailsContainer">
                    {/* Line 39 is just to give some space */}
                <h1 id="spacePlease"></h1> 
                <Grid
                    className="detailsGridContainer"
                    align-alignItems="center"
                    direction="column"
                    container>
                    <Card
                        sx={{ p: 3 }}
                        className="detailsCardContainer"
                        elevation={6}
                    >
                        <img
                            className="singleMovie"
            // Remember line 13? Since we know there is only going to be
            // one object, we don't need to map or loop through anything
            // here. All we need to do is access that object's src, which is 
            // connected by the id by association
                            src={movie.poster} 
                            alt={movie.title}
                        />
            {/* Same thing for line 61 & 62, we know that it will be a single
              object and want that object's data  */}
                        <p> {movie.title} </p> 
                        <p className="detailsDesc"> {movie.description}</p>
                        <Card className="genresCard" elevation={6}>
                        <p className="genresPtag">Genres</p>
            {/* Here we do need to map through the details array. This will
              display the genres associated with the single movies object, even though
                it has information of ALL the movies genres. details.map loops
                through the details object to retrieve its genre for that id */}
                        {details.map(detail => (
                            <p 
                            className="tags"
                            key={detail.genre}
                            > {detail.genre} </p>
                        ))}
                        </Card>
                    </Card>
                    <Button
                        variant="contained"
                        className="homeBtn"
                        onClick={() => (history.push('/'))}>Back to homepage</Button>
                </Grid>
            </Container>
        </>
    )
};

export default DetailsPage;