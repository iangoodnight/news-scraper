

// var mongoose = require("mongoose");
// var Headline = require('../models/Headline');
var axios = require('axios');
var cheerio = require('cheerio');

// // Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/newsScraper", {
//   useMongoClient: true
// });

var scrape = function(req, res) {
  // First, we grab the body of the html with request
  // Review axios.get - PDS wants to use with NYTimes instead
  axios.get("http://www.nytimes.com/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    // Now, we grab every h2 within an article tag, and do the following:
    $("article h2").each(function(i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

      // Create a new Headline using the `result` object built from scraping
      // db.Headline.create(result)
      //   .then(function(dbHeadline) {
      //     // View the added result in the console
      //     console.log(dbHeadline);
      //   })
      //   .catch(function(err) {
      //     // If an error occurred, send it to the client
      //     return res.json(err);
      //   });
      console.log("result: ", result);
    });

    // If we were able to successfully scrape and save a Headline, send a message to the client
    // res.send("Scrape Complete");
  });
};

scrape();