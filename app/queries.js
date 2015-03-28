var User = require("./database").User;
var Recipe = require("./database").Recipe;
var Foodstuff = require("./database").Foodstuff;
var user = require('./user');
var username = undefined;
//var loggedin = false;

module.exports.login = function(req, res){
    
    console.log("queries.js: req.username: " + req.username); //Working!!
    console.log("queries.js: req.password: " + req.password); //Working!!
    //req.session.username = "";
    User.findOne({name: req.username}, "name password _id", function(err, userdata){
        
        //console.log("queries.js: userdata from db: " + userdata); //Working!!    
        //NOTE TO MYSELF: Korjaa tämä 'pikkusen' nätimmäksi...ffs
        if(!userdata || err){
            console.log("queries.js: userdata = undefined or err(or) = " + err + ". Cannot login!"); //Working!! 
            res.send({loggedin: false});
        }
        else if(req.password === userdata.password && req.username === userdata.name){
            console.log("queries.js: Username and password match!"); //Working!!
            //console.log("queries.js: " + req.user); //==undefined
            //req.session.username = userdata.name;
            
            console.log("queris.js: req.cookies = " + req.cookies);
            
            user.loggedin = true;
            username = userdata.name;
            user.setUsername(username); //Loggedin so we send username to user.js
        
            //console.log("queries.js: req.user.loggedin = true");
            //res.send({loggedin: true, username: req.cookies.username});
            res.send({loggedin: true, username: userdata.name});
            //res.send({loggedin: true, username: req.session.username});
        }
        else if(req.password != userdata.password || req.username != userdata.name){
            console.log("queries.js: Wrong username and/or pasvord!"); //Working!!
            res.send({loggedin: false, username: req.cookies.username});
        }
    })
}

module.exports.getAllRecipes = function(req, res){
    
    Recipe.find(function(err, recipedata){    
        if(err){
            console.log("queris.js: Cannot read recipes from db! " + err);   
        }
        else{
            console.log(recipedata); 
            console.log("queris.js: req = " + req);
            
            var temp = {
                name: recipedata
            };
            res.send(temp);
        }    
    });
}

module.exports.addFoodstuff = function(req, res){
    console.log("queries.js: Adding foodstuff!");
    console.log("queries.js: Name = " + req.name + " Unit = " + req.unit + " Price = " + req.price);
    
    var temp = new Foodstuff({
        name: req.name,
        unit: req.unit,
        price: req.price        
    });
    
    temp.save(function(err){
        
        if(err){
            console.log("queries.js: Error! Cannot save foodstuff in db!" + err);
            res.send({saved: false});
        }
        else{
            res.send({saved: true});
        } 
    });    
}

module.exports.getAllFoodstuff = function(req, res){
    console.log("queries.js: Gettin all foodstuff from db!");
    Foodstuff.find(function(err, foodstuffdata){
        
        if(err){
            console.log("queries.js: Error!! Cannot get all foodstuff from db! " + err);   
        }
        else{
            console.log("01 queries.js: All foodstuff from db = " + JSON.stringify(foodstuffdata));
            var temp = {
                name: foodstuffdata.name,
                unit: foodstuffdata.unit,
                price: foodstuffdata.price    
            };
            console.log("02 queries.js: All foodstuff from db = " + JSON.stringify(temp));
            //res.send(temp);
            res.send({foodstuffdata:foodstuffdata});
            }
        });        
}