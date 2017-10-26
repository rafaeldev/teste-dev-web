var express = require('express');
var router = express.Router();

const dogs = [
  { breed: "Pitbull" },
  { breed: "Vira-lata" },
  { breed: "Bulterriet" }
];

router.get("/", function(req, res, next) {
  res.send(dogs);
});

module.exports = router;
