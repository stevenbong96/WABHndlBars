// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??;";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO ?? (??) VALUE (?)";
  
      connection.query(queryString, [table, cols, vals], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE ?? SET ?? = true WHERE id = ?"
      connection.query(queryString, [table, objColVals, condition], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    
    // delete: function(table, condition, cb) {
    //   var queryString = "DELETE FROM " + table;
    //   queryString += " WHERE ";
    //   queryString += condition;
  
    //   connection.query(queryString, function(err, result) {
    //     if (err) {
    //       throw err;
    //     }
  
    //     cb(result);
    //   });
    // }
};
  
// Export the orm object for the model (cat.js).
module.exports = orm;
