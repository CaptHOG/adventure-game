const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// GET /userCharacters
router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log('req.user:', req.user);
  const sqlQuery = `
    SELECT * FROM "user_characters";
  `;

  pool.query(sqlQuery)
    .then((dbRes) => {
      const userCharacters = dbRes.rows;
      console.log('dbRes.rows:', userCharacters);
      // this gets sent to the client based on sqlQuery
      res.send(userCharacters);
    })
    .catch((dbErr) => {
      console.error('ERROR /userCharacters GET:', dbErr);
      res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('req.body:', req.body);
  const newCharacter = req.body;

  const queryText = `
    INSERT INTO "user_characters" ("name", "image_url", "energy_points", "user_id")
      VALUES
      ($1, $2, $3, $4);
  `;
  const queryValues = [
    newCharacter.name,
    newCharacter.image_url,
    newCharacter.energy_points,
    newCharacter.user_id
  ]

  pool.query(queryText, queryValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log('Error newCharacter POST', dbErr);
      res.sendStatus(500);
    });
});

module.exports = router;