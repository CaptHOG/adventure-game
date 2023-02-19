const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// GET all /userCharacters
router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log('req.user:', req.user);
  const sqlQuery = `
    SELECT * FROM "user_characters"
      ORDER BY "id";
  `;

  pool.query(sqlQuery)
    .then((dbRes) => {
      const userCharacters = dbRes.rows;
      // console.log('dbRes.rows:', userCharacters);
      // this gets sent to the client based on sqlQuery
      res.send(userCharacters);
    })
    .catch((dbErr) => {
      console.error('Error /userCharacters GET:', dbErr);
      res.sendStatus(500);
    })
});

// POST /userCharacters
router.post('/', rejectUnauthenticated, (req, res) => {
  // console.log('/userCharacters req.body:', req.body);
  const newCharacter = req.body;

  const queryText = `
    INSERT INTO "user_characters" (
      "name", 
      "energy_points", 
      "image_url", 
      "idle_class", 
      "kick_class", 
      "hurt_class",
      "walk_class",
      "run_class",
      "selected",
      "user_id"
    )
      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    ;
  `;
  const queryValues = [
    newCharacter.name,
    newCharacter.energy_points,
    newCharacter.image_url,
    newCharacter.idle_class,
    newCharacter.kick_class,
    newCharacter.hurt_class,
    newCharacter.walk_class,
    newCharacter.run_class,
    newCharacter.selected,
    newCharacter.user_id
  ]

  pool.query(queryText, queryValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.error('Error newCharacter POST', dbErr);
      res.sendStatus(500);
    });
});

// DELETE /userCharacters
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // Delete an item if it's something the logged in user added
  let characterId = req.params.id;
  // if logged in you can access user.id
  let userId = req.user.id;

  // console.log('delete userId:', userId);
  // console.log('delete characterId:', characterId);

  let queryValues = [characterId, userId];
  let queryText = `
    DELETE FROM "user_characters"
      WHERE "id"=$1
        AND "user_id"=$2;
  `;

  pool.query(queryText, queryValues)
    .then((dbRes) => {
      // console.log('dbRes.rows:', dbRes.rows);
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.error('Error userCharacters delete:', dbErr);
      res.sendStatus(500);
    })
})

// PUT /userCharacters
router.put('/:id', rejectUnauthenticated, (req, res) => {
  let selectedCharacterId = req.params.id;
  let isSelected = true;

  console.log('selectedCharacterId:', selectedCharacterId)

  let queryText = `
    UPDATE "user_characters"
      SET "selected"=$1
      WHERE "id"=$2;
  `;

  pool.query(queryText, [isSelected, selectedCharacterId])
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.error('Error /userCharacters PUT:', dbErr);
      res.sendStatus(500);
    })
})


module.exports = router;