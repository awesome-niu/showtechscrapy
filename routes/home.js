/**
 * Created by user on 2015/8/19.
 */
//var express = require('express');
//var router = express.Router();
//
///* GET home page. */
//router.get('/', function(req, res, next) {
//    res.render('home', { title: 'android-collection' });
//});
//
//module.exports = router;

var express = require('express');
var url = require('url');
var router = express.Router();
var Paper = require('../models/techandroid.js');
var paper = new Paper(1,1,1,1);
/* GET home page. */
router.get('/', function(req, res, next) {
    paper.get(1, function (err, data) {
        if (err) {
            res.write("it's error!");
            res.end();
        };
        console.log(data)
        res.render('home.ejs', {'title': 'android papers', papers: data});
    })
});

router.post('/', function(req, res, next) {
    var page = req.body["page"];
    console.log("page:" + page);
    console.log("tag:" + req.body["tag"]);
    paper.get(page, function (err, data) {
        if (err) {
            res.write("it's error!");
            res.end();
        };
        console.log(JSON.stringify(data));
        res.write(JSON.stringify(data));
        res.end();
        //res.json(data);
    })

});

module.exports = router;