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

router.delete("/api/dosages/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  dosage.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
