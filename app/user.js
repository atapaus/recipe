var express = require('express');
var router = express.Router();
//var user = require('./user');
var username = "Aku Ankka from user.js";
//var password;
var loggedin = false;



router.setUsername = function(name){
 
    username = name;
    console.log("user.js: username from queries.js = " + username);
}

router.getUsername = function(){
    
   return username; 
}




router.post('/login',function(req,res){
    var temp = {};
    temp.username = req.body.username;
    temp.password = req.body.password;
    //req.session.username = "Ynf Tuut";
    console.log("user.js: req.session.username = " + req.session.username);
    //console.log("user.js: temp: " + temp);  
    req.queries.login(temp, res);
    
});

router.get('/logout',function(req,res){
    console.log("user.js: Logging out!");
    //req.cookies.username = "";
    //req.cookies.destroy();
    loggedin = false;
    //req.logout();
    
    req.session.destroy();
    
    
    //req.session.destroy();
    //req.cookies = null;
    //console.log("user.js: Cookies: " + req.cookies);
    //req.session = null;
    //req.user = null; 
    //res.clearCookie('cook');
    //res.send('logged out');
    
    res.send('logged out');
    
    
});

module.exports = router;
//module.exports = getUsername;    