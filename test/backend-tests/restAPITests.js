global.TEST_DATABASE = 'mongodb://smara:smara@ds053370.mongolab.com:53370/ca4';

var should = require("should");
var app = require("../../server/app");
var http = require("http");
var testPort = 9999;
var testServer;
var mongoose = require("mongoose");
var User = mongoose.model("wiki");


describe('REST API for Wikis', function () {
    //Start the Server before the TESTS
    before(function (done) {
        testServer = app.listen(testPort, function () {
            console.log("Server is listening on: " + testPort);
            done();
        })
            .on('error', function (err) {
                console.log(err);
            });
    });


    after(function () {  //Stop server after the test
        //Uncomment the line below to completely remove the database, leaving the mongoose instance as before the tests
        //mongoose.connection.db.dropDatabase();
        testServer.close();
    });

    it("should return nasdaq as title", function (done) {

        http.get("http://localhost:" + testPort + "/api/title/NASDAQ", function (res) {
            res.setEncoding("utf8");//response data is now a string
            res.on("data", function (chunk) {
                var n = JSON.parse(chunk);
                n.length.should.equal(1);
                n[0].title.should.equal("NASDAQ");

                done();
            });
        })
    });

    it("should return Gang as a category", function (done) {
        http.get("http://localhost:" + testPort + "/api/categories/Gangs", function (res) {
            res.setEncoding("utf8");//response data is now a string
            res.on("data", function (chunk) {
                var n = JSON.parse(chunk);
                n.length.should.equal(1);
                n[0].title.should.equal("Gang");

                done();
            });
        })
    });

    it("should return all categories", function (done) {
        http.get("http://localhost:" + testPort + "/api/categories", function (res) {
            res.setEncoding("utf8");//response data is now a string
            res.on("data", function (chunk) {
                var n = JSON.parse(chunk);
                n.length.should.not.equal(0);
                done();
            });
        })
    });

    it("should return the searchstring", function (done) {
        http.get("http://localhost:" + testPort + "/api/search/argon", function (res) {
            res.setEncoding("utf8");//response data is now a string
            res.on("data", function (chunk) {
                var n = JSON.parse(chunk);
                n.length.should.not.equal(0);
                done();
            });
        })
    });


    it("should return all wikis", function (done) {
        http.get("http://localhost:" + testPort + "/api/allWiki", function (res) {
            res.setEncoding("utf8");//response data is now a string
            res.on("data", function (chunk) {
                var n = JSON.parse(chunk);
                n.length.should.not.equal(0);
                done();
            });
        })
    });

});
