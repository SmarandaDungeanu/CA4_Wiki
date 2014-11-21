var express = require('express');
var router = express.Router();
var wikis = require('../model/data');

var mongoose = require('mongoose');

///* GET A User From The DataBase */
//router.get('/user', function(req, res) {
//  if(typeof global.mongo_error !== "undefined"){
//    res.status(500);
//    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
//    return;
//  }
//  user.find({}, function (err, users) {
//    if (err) {
//      res.status(err.status || 400);
//      res.end(JSON.stringify({error: err.toString()}));
//      return;
//    }
//    res.header("Content-type","application/json");
//    res.end(JSON.stringify(users));
//  });
//});

router.get('/title/:title', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }
  wikis.getWiki(req.params.title, function (err, wiki) {
    if (err) {
      return err;
    }
    res.end(JSON.stringify(wiki));
  })
});

router.get('/categories/:category', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error);
    return;
  }
  wikis.getWikisWithCategory(req.params.category, function (err, wikis) {
    if (err) {
      return err;
    }
    console.log(wikis.length);
    res.header("Content-type", "application/json");
    res.end(JSON.stringify(wikis));
  })
});

router.get('/categories', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error);
    return;
  }
  wikis.getCategories(function (err, categories) {
    if (err) {
      return err;
    }
    res.end(JSON.stringify(categories));
  })
});

router.get('/search/:searchString', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error);
    return;
  }
  wikis.findWiki(req.params.searchString, function (err, titles) {
    if (err) {
      return err;
    }
    res.end(JSON.stringify(titles));
  })
});

router.get('/allWiki', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error);
    return;
  }
  wikis.allWiki(function (err, wikis) {
    if (err) {
      return err;
    }
    res.end(JSON.stringify(wikis));
  })
});

module.exports = router;
