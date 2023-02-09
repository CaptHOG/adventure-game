const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// GET /characters
router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log('req.user:', req.user);
  const sqlQuery = `
    SELECT * FROM "characters";
  `;

  pool.query(sqlQuery)
    .then((dbRes) => {
      const characters = dbRes.rows;
      // console.log('dbRes.rows:', characters);
      
      // this gets sent to the client based on sqlQuery
      res.send(characters);
    })
    .catch((dbErr) => {
      console.error('ERROR /characters GET:', dbErr);
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