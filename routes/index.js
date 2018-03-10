var express = require("express");
var router = express.Router();
//Require controller modules
var fetch = require('../controllers/fetch');
var headline = require('../controllers/headline')

router.get("/", function(req, res) {
	res.render("home", { title: "Express" });
});
router.get("/saved", function(req, res) {
	res.render("saved", { title: "Express" });
});
// SCRAPE ROUTES //
// GET - Scrape new articles.
router.get('/api/fetch', fetch.scrape);
router.get('/api/headlines', headline.findAll);
router.get('api/headlines/saved', headline.findSaved);
router.put('api/headlines/:id', headline.save);

module.exports = router;

