const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// GET /backpack
router.get('/', rejectUnauthenticated, (req, res) => {
  // console.log('req.user:', req.user);
  const sqlQuery = `
    SELECT * FROM "backpack";
  `;

  pool.query(sqlQuery)
    .then((dbRes) => {
      const backpack = dbRes.rows;
      console.log('dbRes.rows:', backpack);
      // this gets sent to the client based on sqlQuery
      res.send(backpack);
    })
    .catch((dbErr) => {
      console.error('Error /backpack GET:', dbErr);
      res.sendStatus(500);
    })
});

// POST /backpack
router.post('/', rejectUnauthenticated, (req, res) => {
  const newBackpackArray = req.body;
  console.log('newBackpackArray /backpack POST:', newBackpackArray);

  const queryText = `
    INSERT INTO "backpack" (
      "name",
      "image_url",
      "description",
      "attack_damage",
      "energy_cost"
    )
      VALUES
      ($1, $2, $3, $4, $5),
      ($6, $7, $8, $9, $10),
      ($11, $12, $13, $14, $15);
  `;
  const queryValues = [
    newBackpackArray[0].name,
    newBackpackArray[0].image_url,
    newBackpackArray[0].description,
    newBackpackArray[0].attack_damage,
    newBackpackArray[0].energy_cost,

    newBackpackArray[1].name,
    newBackpackArray[1].image_url,
    newBackpackArray[1].description,
    newBackpackArray[1].attack_damage,
    newBackpackArray[1].energy_cost,

    newBackpackArray[2].name,
    newBackpackArray[2].image_url,
    newBackpackArray[2].description,
    newBackpackArray[2].attack_damage,
    newBackpackArray[2].energy_cost
  ];

  pool.query(queryText, queryValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.error('Error newCharacter POST', dbErr);
      res.sendStatus(500);
    });
});

module.exports = router;