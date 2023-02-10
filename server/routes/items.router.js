const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// GET /items
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `
    SELECT * FROM "items";
  `;

  pool.query(queryText)
    .then((dbRes) => {
      const items = dbRes.rows;
      res.send(items);
      // console.log('items:', items);
    })
    .catch((dbErr) => {
      console.error('Error /items GET:', dbErr);
    })
})


module.exports = router;