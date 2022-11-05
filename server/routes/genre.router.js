const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres

  // const sql = `
  // SELECT * FROM "genres"."name";
  // `;
  // const sqlParams = [req.body.poster, req.body.name];
  // pool.query(sql,sqlParams)
  // .then(dbRes => {
  //   console.log(dbRes, 'is dbRes');
  //   console.log(sqlParams,"is sqlParams");
  //   res.send(dbRes.rows);
  // })
  // .catch(err => {
  //   console.error('GET /genres error', err);
  //   res.sendStatus(500);
  // })
});

module.exports = router;