var express = require('express');
var router = express.Router();
var wikis = require('../model/data');

var mongoose = require('mongoose');

/* GET A User From The DataBase */
router.get('/user', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;
  }
  user.find({}, function (err, users) {
    if (err) {
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.toString()}));
      return;
    }
    res.header("Content-type","application/json");
    res.end(JSON.stringify(users));
  });
});

router.get('/wiki/title/:title', function(req, res) {
  wikis.getWiki(req.params.title, function (err, wiki) {
    if (err) {
      return err;
    }
    res.render('wikis', {wikis: wiki});
  })
});

router.get('/wiki/category/:category', function(req, res) {
  wikis.getWikisWithCategory(req.params.category, function (err, wikis) {
    if (err) {
      return err;
    }
    res.end(JSON.stringify(wikis));
  })
});

router.get('/categories', function(req, res) {
  wikis.getCategories(function (err, categories) {
    if (err) {
      return err;
    }
    res.render('categories', {categories: categories});
  })
});

router.get('/search/:searchString', function(req, res) {
  wikis.findWiki(req.params.searchString, function (err, titles) {
    if (err) {
      return err;
    }
    res.end(JSON.stringify(titles));
  })
});

module.exports = router;
