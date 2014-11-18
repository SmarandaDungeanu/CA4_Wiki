var mongoose = require('mongoose');
var model = require("../model/db");

function getWiki(title, callback){
    model.WikiModel.find({title : title}, function(err, wiki){
        if (err) {
            return callback(err);
        }
        callback(null,wiki);
    })
}

function findWiki(searchString, callback){
    model.WikiModel.find({title: new RegExp(searchString, "i")}).select('title abstract')
        .exec(function(err, wikis){
            if (err) {
                return callback(err);
            }
            callback(null, wikis);
        })
}

function getCategories(callback) {
    model.WikiModel.distinct('categories')
        .exec(function (err, categories) {
            if (err) {
                return callback(err);
            }
            callback(null, categories);
        })
}

function getWikisWithCategory(category, callback){
    model.WikiModel.find({categories: category})
        .select('title abstract')
        .exec(function(err, wikis){
            if (err) {
                return callback(err);
            }
            callback(null, wikis);
        })
}

module.exports = {
    getWiki: getWiki,
    getCategories: getCategories,
    findWiki: findWiki,
    getWikisWithCategory: getWikisWithCategory
}