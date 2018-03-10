var express = require("express");
var router = express.Router();
//Require controller modules
var fetch = require('../controllers/fetch');

router.get("/", function(req, res) {
	res.render("home", { title: "Express" });
});
// SCRAPE ROUTES //
// GET - Scrape new articles.
router.get('/api/fetch', fetch.scrape);

module.exports = router;

