const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// GET /selectedCharacter
router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log('req.user:', req.user);
  const sqlQuery = `
    SELECT * FROM "user_characters"
      WHERE "selected"=true;
  `;

  pool.query(sqlQuery)
    .then((dbRes) => {
      const selectedCharacter = dbRes.rows;
      console.log('dbRes.rows:', dbRes.rows)
      // this gets sent to the client based on sqlQuery
      res.send(selectedCharacter);
    })
    .catch((dbErr) => {
      console.error('Error /userCharacters GET:', dbErr);
      res.sendStatus(500);
    })
});


module.exports = router;