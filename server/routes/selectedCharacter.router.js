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
      console.log('selectedCharacter dbRes.rows:', dbRes.rows)
      // this gets sent to the client based on sqlQuery
      res.send(selectedCharacter);
    })
    .catch((dbErr) => {
      console.error('Error /userCharacters GET:', dbErr);
      res.sendStatus(500);
    })
});

// router.post('/', (req, res) => {
//   console.log('req.body selectedCharacter POST:', req.body);

//   const characterToPost = req.body

//   const sqlQuery = `
//   INSERT INTO "selected_character" (
//     "name",
//     "image_url",
//     "energy_points"
//   )
//     VALUES
//     ($1, $2, $3)
//   `;
//   const sqlValues = [
//     characterToPost.name,
//     characterToPost.image_url,
//     characterToPost.energy_points
//   ]

//   pool.query(sqlQuery, sqlValues)
//     .then((dbRes))
// })


module.exports = router;