const express = require('express');
const router = express.Router();

const dosage = require('../models/dosage.js')

router.get("/", function(req, res) {
  dosage.all(function(data) {
    const handlebarsObject = {
      dosages: data
    };
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
  });
});

module.exports = router;
