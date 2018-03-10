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
  // Find Saved headlines
  findSaved: function(req, res) {
  	db.Headline
  		.find({saved: "true"})
  		.then(function(dbHeadline) {
  			res.json(dbHeadline);
  		});
  },
  // Delete the specified headline
  delete: function(req, res) {
  	// var objectId = "ObjectId(\"" + req.params.id + "\")";
    db.Headline.remove({ _id: objectId }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  },
  // Update the specified headline
  save: function(req, res) {
   	var objectId = "ObjectId(\"" + req.params.id + "\")";
   	console.log(objectId);
    db.Headline.updateOne({_id: objectId}, {$set: { saved: 'true'}}).then(function(dbHeadline) {
      console.log("_id: ", req.body._id);
      res.json(dbHeadline);
    });
  }
};