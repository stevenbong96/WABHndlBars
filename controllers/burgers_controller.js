var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var eatBurgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  eatBurgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  eatBurgers.create(
    "burger_name",
    req.body.burger_name
  , function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition =  req.params.id;

  console.log("condition", condition);

  eatBurgers.update( condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
