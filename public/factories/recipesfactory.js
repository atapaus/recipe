module.factory('RecipesFactory',['$resource', '$location', '$rootScope', function($resource, $location, $rootScope){
    
    var factory = {};
    
    factory.getAllRecipes = function(){
        console.log("recipesfactory.js: Getting all recipes from db!");
        
        return $resource('/recipes/recipes').get().$promise;
        
        
        
 
        
        
        
        
        
        
        //var res = $resource('/recipes/login',{},{post:{method:'POST'}});
        //res.post().$promise.then(function(data){
        //    console.log("recipesfactory.js: " + data.response);
            
        //});
        
    }
    
    return factory;
}]);