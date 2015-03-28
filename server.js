var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./app/database');
var user = require('./app/user');
var recipes = require('./app/recipes');
var queries = require('./app/queries');

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: null }}))
app.use('/',express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(function(req,res,next){
    req.queries = queries;  
    req.user = user; 
    console.log(" 1. server.js: req.session.username = " + req.session.username);
    next();
});

app.use("/app",user);
app.use("/recipes", recipes);
app.get('/authenticate',function(req,res){
    console.log("server.js: user.getUsername() = " + user.getUsername());
    console.log("2. server.js: req.session.username = " + req.session.username);
    console.log("server.js: req.session = " + req.session);
    req.session.username = user.getUsername();//!!!!
    console.log("Cookies01: " + req.cookies);
    console.log("Cookies02: " + JSON.stringify(req.cookies));
    
    if(req.session.username){
        console.log("server.js: req.user.loggedin = true");
        //req.cookies.username = "Antti T";  //Works!!
        //console.log("server.js: req.cookies.username = " + req.cookies.username); //Works!!
        res.send({authenticated:true});
    }
    else{
        console.log("server.js: req.user.loggedin = false");
        res.send({authenticated:false});
    }
});

//app.listen(3000);

//var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
//var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
//server.listen(server_port, server_ip_address, function () {
//  console.log( "Listening on " + server_ip_address + ", server_port " + port )
//});

var port = parseInt(process.env.OPENSHIFT_NODEJS_PORT, 10) || 3000; 
server.listen(port,process.env.OPENSHIFT_NODEJS_IP);





