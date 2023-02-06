const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET /characters
router.get('/', (req, res) => {
  const sqlQuery = `
    SELECT * FROM "characters";
  `;

  pool.query(sqlQuery)
    .then((dbRes) => {
      const characters = dbRes.rows;
      console.log('dbRes.rows:', characters);
      // this gets sent to the client based on sqlQuery
      res.send(characters);
    })
    .catch((dbErr) => {
      console.error('ERROR /api/characters GET:', dbErr);
      res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;