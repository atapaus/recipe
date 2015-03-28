var express = require('express');
var router = express.Router();

//Get all recipes from db
router.get('/recipes',function(req,res){
    console.log("recipes.js: getting all recipes from db!");
    req.queries.getAllRecipes(req, res);
});



router.post('/addfoodstuff',function(req,res){
    
    console.log("recipes.js: Adding foodstuff!");
    var temp = {};
    temp.name = req.body.name;
    temp.unit = req.body.unit;
    temp.price = req.body.price;
    console.log("recipes.js: Name = " + temp.name + " Unit = " + temp.unit + " Price = " + temp.price);
    req.queries.addFoodstuff(temp, res);

});

router.get('/foodstuff',function(req,res){
    console.log("recipes.js: getting all from from db!");
    req.queries.getAllFoodstuff(req, res);
});





module.exports = router;




