import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies); // Goes to line 21
    yield takeEvery('FETCH_DETAILS', fetchDetails); // Goes to line 34
}

//Generator 
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('fetch all movies & receive movies.data:', movies.data); // (array of objects)
        yield put({ type: 'SET_MOVIES', payload: movies.data }); 
    }
    catch {
        console.log('get all error');
    }
};

//Generator  
function* fetchDetails(action) {
    console.log('fetchDetails action.payload is:', action.payload);
    try {
        const response = yield axios.get(`/api/genre/${action.payload}`);
        yield put({ type: 'SET_GENRES', payload: response.data }); 
    }
    catch {
        console.log('get all error');
    }
};

const movieDetails = (state = [], action) => {
    console.log('in movieDetails, action payload is: ', action.payload);
    // action.payload is undefined on page load. It will become the associated movie id
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state; // If case is not 'SET_GENRES', return an empty array
    }
};

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload; //This is the movie list array
            // It's connected to line 26 after the generator 
            // communicates with the server router
        default:
            return state;
    }
};

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies, 
        movieDetails // Currently primarily used to display the movie's list of genres
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga); 

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
