const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
// This router take the params id that was sent to it and returns the data
// for that specific query
router.get('/:id', (req, res) => {
  const sql = `
  SELECT 
  "genres"."name" as genre 
  FROM "genres"
  JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id"
  JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
  WHERE "movies"."id" = $1`
// Line 9 says, return the values for the genres table 
// that have the value "name".Call them genres (as).
// Line 10 says we are indeed dealing with the "genres" table.
// Line 11 says, take "genres" and connect it to the "movies_genres" table.
// Join establishes the connection, while "ON" tells us what to connect.
// In this case it says that the "id" column in the "genres" table
// is related to the "movies_genres" table's "genre_id".
// Line 12 add another table to correlate, which is "movies".
// Here we are saying that the "movies" column "id" correlates to 
// the table "movies_genres"'s "movie_id" column. 
// Line 13 says to only look for "genres"."name" (from line 9)
// where "movies"."id" equals the parameter passed through ($1). 
console.log('genre GET params id', req.params.id); // id that was passed thru

  pool.query(sql, [req.params.id])
    .then(dbRes => {
      res.send(dbRes.rows);
    })
});
// Line 28 is saying to take the command (sql)
// queries the command with the req.params.id array.
// .then sends that result back to where it was called. dbRes.rows
// is an array with one or more objects structed as 
// [{genre: 'Adventure'}]
// In this case, it gets sent back to to the server, back to the generator
// that called it in index.js (as response.data), to the redux store to 
// give the variable those values, to the MovieDetails variable,
// and then is able to be used with the useSelector on the dispatch page
// to access that data on line 69, which is then immported
// through the App.js page to display on the DOM.

module.exports = router;