var path = require('path'),
    mongoClient = require("mongodb").MongoClient,
    confDB = require('./config/db'),
    express = require('express'),
    app = express(),
    confAPP = require('./config/app'); // init app
    ERP = new confAPP(app,express,path,3000),
    URL = "mongodb://192.168.99.100:27017/",
    db  = new confDB(mongoClient,URL),
    api = require('./controllers/api')(app, db, path);

/*var user1 = {
    name:'user1',
    password: 'user1',
    id:1
},
user2 = {
    name:'user2',
    password: 'user2',
    id:2
};*/
var user;
db.cursor({id:11},function(res){
   user = res;
   console.log(user);
});
console.log(user);

