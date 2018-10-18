let fs = require('fs'),
    path = require('path'),
    url = require('url'),
    http = require('http'),
    express = require('express'),
    app = express(),
    conf = require('./config')(app, express,path,8080), // init app
    api = require('./controllers/api')(app);


