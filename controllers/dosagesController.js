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

router.post("/api/dosages", function(req, res) {
  console.log(req.body)
  dosage.create(
    ["dosage", "user_entered_date", "user_entered_time"],
    [req.body.dosage, req.body.date, req.body.time],
    function() {
    res.redirect("/");
  });
});

router.get("/alldosages", function(req, res) {
  dosage.all(function(data) {
    const handlebarsObject = {
      dosages: data
    };
    console.log(handlebarsObject);
    res.render("alldosages", handlebarsObject);
  });
});

module.exports = router;
