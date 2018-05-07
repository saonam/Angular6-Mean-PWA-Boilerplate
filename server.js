var express = require('express');
var path=require('path');
var app = express();
var router=express.Router();
var bodyParser = require('body-parser');
var compression = require('compression');
var mongoose = require('mongoose');


//mongodb://localhost:27017/meanstarter
mongoose.connect('mongodb://prithvi:prithvi@ds113700.mlab.com:13700/meanstackboiler');

    
app.use(compression());
app.use(express.static(path.join(__dirname, "./dist")));

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

var articles = require("./server/routes/articles.js");

app.use("/api", articles);

/// app runs in port
app.listen(process.env.PORT || 3000,function(){
    console.log('listening at 3000');
});