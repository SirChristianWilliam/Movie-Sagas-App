import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
                    <h1>MovieList</h1>
                    <Grid container >
                        {/* xs={3} sm={6} md={12} */}
                        <Grid spacing={8} >
                            <section className="movies">

                                {movies.map(movie => {

                                    return (
                                        <div key={movie.id}>
                                            <h3>{movie.title}</h3>
                                            <Card >
                                                <CardHeader 
                                                action={
                                                    <IconButton>
                                                    <DeleteForeverOutlined />
                                                  </IconButton>
                                                }/>
                                                <img
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

                            </section>
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </>
    );
}

export default MovieList;