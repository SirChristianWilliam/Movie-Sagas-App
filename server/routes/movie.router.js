const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//This router is for getting ALL the movies from the database
router.get('/', (req, res) => {
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query) //query is the action
    .then(result => {
      // result.rows is the array of movie objects
      res.send(result.rows);
      // send this back to wherever it was requested
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500);
    })
});

// router.get('/:id', (req,res) => {
//   const queryText = `
//   SELECT * FROM "movies"
//   WHERE "id" = $1;
//   `;
//   pool.query(queryText, [req.params.id])
//   .then(result => {
//     res.send(result.rows[0]);
//   })
//   .catch(err => {
//     console.log('ERROR in /GET/:id',err);
//     res.sendStatus(500);
//   })
// })


// CODE BELOW IS UNFINISHED CODE THAT WILL BE USED IN CONJUNCTION WITH THE AddMoviePage TO
// 'POST' MOVIE THAT ARE ADDED VIA A FORM

// router.post('/', (req, res) => {
//   console.log(req.body);
//   // Returning "id" will give us back the id of the created movie
//   const insertMovieQuery = `
//   INSERT INTO "movies" ("title", "poster", "description")
//   VALUES ($1, $2, $3)
//   RETURNING "id";`

//   // FIRST QUERY MAKES MOVIE
//   pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
//     .then(result => {
//       console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!

//       const createdMovieId = result.rows[0].id

//       // Now handle the genre reference
//       const insertMovieGenreQuery = `
//       INSERT INTO "movies_genres" ("movie_id", "genre_id")
//       VALUES  ($1, $2);
//       `
//       // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
//       pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
//         //Now that both are done, send back success!
//         res.sendStatus(201);
//       }).catch(err => {
//         // catch for second query
//         console.log(err);
//         res.sendStatus(500)
//       })

//       // Catch for first query
//     }).catch(err => {
//       console.log(err);
//       res.sendStatus(500)
//     })
// })

module.exports = router;