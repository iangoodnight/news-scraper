var express = require('express');
var router = express.Router();

//Require controller modules
var headline_controller = require('../controllers/headline');

// SCRAPE ROUTES //

// GET - Scrape new articles.
router.get('/api/fetch', headline_controller.fetch_new);

module.exports = router;