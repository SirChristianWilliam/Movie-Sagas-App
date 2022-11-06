import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Container } from '@mui/system';

//MUI CARD
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
//END MUI CARDS
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
                    {/* <h1>MovieList</h1> */}
                    <br></br><br></br><br></br><br></br>
                    <Grid container spacing={1} >
                        <Grid >
                            <section className="movies">
                                <Card
                                    sx={{ bgcolor: '#161313', color: 'rgb(200 176 176)', }}
                                    elevation={6} className="moviesCard">
                                    {movies.map(movie => {

                                        return (
                                            <div key={movie.id}>
                                                <h3>{movie.title}</h3>

                                                <Card elevation={6} sx={{ p: 2, bgcolor: '#a497b240'}}>
                                                    <img

                                                        className='moviesImages'
                                                        src={movie.poster}
                                                        alt={movie.title}
                                                        onClick={() => {
                                                            history.push(`/${movie.id}`)
                                                        }
                                                        }
                                                    />
                                                </Card>
                                            </div>

                                        );

                                    })}
                                </Card>
                            </section>
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </>
    );
}

export default MovieList;