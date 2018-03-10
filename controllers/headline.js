// dependencies
var db = require("../models");

module.exports = {
  // Find all headlines
  findAll: function(req, res) {
    db.Headline
      .find(req.query)
      .then(function(dbHeadline) {
        res.json(dbHeadline);
      });
  },
  // Delete the specified headline
  delete: function(req, res) {
    db.Headline.remove({ _id: req.params.id }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  },
  // Update the specified headline
  update: function(req, res) {
    db.Headline.findByIdAndUpdate({_id: req.body.id}, {$set: { saved: 'true'}}, { new: true }).then(function(dbHeadline) {
      console.log("_id: ", req.body.id);
      res.json(dbHeadline);
    });
  }
};