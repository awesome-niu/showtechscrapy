/**
 * Created by user on 2015/9/17.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/scrapy';

function Paper(host, link, tag, title) {
    this.host = host;
    this.link = link;
    this.tag = tag;
    this.title = title;
}

module.exports = Paper;

Paper.prototype.get = function(page, callback) {
    MongoClient.connect(url, function(err, db) {
        db.collection("tech.android", function (err, collection) {
            if (err) {
                console.log(err);
                console.log("collection error");
                db.close();
                return;
            }

            collection.find({"tag": "android"}, {skip:10*(page-1),limit:10}, function (err, results) {
                if (err) {
                    console.log("collection error");
                    db.close();
                    return;
                }

                results.toArray(function (err, arr) {
                    if (err) {
                        console.log("collection error");
                        db.close();
                        return;
                    }

                    callback(err, arr);

                });
            });

        });
    });
}