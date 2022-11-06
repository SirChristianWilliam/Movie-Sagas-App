const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  
  const sql = `
  SELECT 
  "genres"."name" as genre
  FROM "genres"
  JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id"
  JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
  WHERE "movies"."id" = $1`

  console.log('genre GET params id',req.params.id);

  pool.query(sql, [req.params.id])
  .then(dbRes => {
    res.send(dbRes.rows);
  })

});

module.exports = router;