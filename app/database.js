var mongoose = require('mongoose');
var uri = 'mongodb://localhost/resepti';

var bcrypt = require('bcrypt-nodejs');


if(process.env.OPENSHIFT_MONGODB_DB_URL){
  uri = process.env.OPENSHIFT_MONGODB_DB_URL + "address";
}

mongoose.connect(uri ,function(err,success){
    
    if(err){
        console.log("database.js: Check that your MongoDB is running." + err);
    }
    else{
        console.log('database.js: We are now connected to MongoDB');
    }
});

var Schema = mongoose.Schema;

var user = new Schema({
    name:{type:String,unique:true},
    password:String,
});

var recipe = new Schema({
    name:{type:String,unique:true}
    //ruoka-aineet ja määrä    
});

var foodstuff = new Schema({
    name: String,
    unit: String,
    price: String // Price/unit.
});

user.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

user.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('User',user);
var Recipe = mongoose.model('Recipe', recipe);
var Foodstuff = mongoose.model('Foodstuff', foodstuff);

var firstUser = new User({name: 'ktunnus', password: 'ssana'})
console.log("database.js: Username = " + firstUser.name + ", Password = " + firstUser.password);
firstUser.save(function(err){
    if(err){
        console.log("database.js: Cannot create firstUser in MongoDB." + err);      
    }
    else{
        console.log("database.js: FirstUser is created in MongoDB");        
    }
});

var firstRecipe = new Recipe({name: 'Lihapullat'})
firstRecipe.save(function(err){
    if(err){
        console.log("database.js: Cannot create firstRecipe in MongoDB." + err);      
    }
    else{
        console.log("database.js: firstRecipe is created in MongoDB");
        
    }
});

module.exports.User = User;
module.exports.Recipe = Recipe;
module.exports.Foodstuff = Foodstuff;