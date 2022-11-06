
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

import Grid from '@material-ui/core/Grid';
import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';
 import { palette } from '@mui/system';

function DetailsPage() {
    const dispatch = useDispatch();
    const params = useParams(); //Params are page ID for that movie
    const movie = useSelector(store => store.movies.find((movie) => movie.id == params.id));
    const details = useSelector(store => store.movieDetails);
    const history = useHistory();
    console.log(params, "WHAT ARE THE PARAMS!?!?!");
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
            <Container
                sx={{ width: '50%', pb:16 }}
                className="detailsContainer">

                <h1>details page</h1>
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
                            src={movie.poster}
                            alt={movie.title}
                        />

                        <p> {movie.title} </p>

                        <p className="detailsDesc"> {movie.description}</p>
                        <Card className="genresCard" elevation={6}>
                        <p className="genresPtag">Genres</p>
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
}

export default DetailsPage;