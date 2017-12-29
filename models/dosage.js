// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const dosage = {
  all: function(cb) {
    orm.all("dosages", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("dosages", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("dosages", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("dosages", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = dosage;
