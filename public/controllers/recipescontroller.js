module.controller('RecipesController', ['$scope', '$location', '$rootScope', 'RecipesFactory', '$timeout', function($scope, $location, $rootScope, RecipesFactory, $timeout){
   
    //$scope.recipes = {};
    $scope.recipe = {};
    $scope.recipe.recipes = [];
    console.log("recipescontroller.js: You just clicked RECIPES!!");

    RecipesFactory.getAllRecipes().then(function(data){
        
        //$scope.recipe.recipes = data.name;
        //$scope.recipe.recipes = data.recipes;

        //console.log("recipescontroller.js: $scope.recipe.recipes: " + $scope.recipe.recipes.name);
        
        //console.log("recipescontroller.js: " + data.response);
        console.dir("console.dir(data): " + data);
        console.log("JSON.stringify(data)" + JSON.stringify(data));
        console.log("recipescontroller.js: all recipes from db: " + data); //obj[property]
        //$scope.recipes = data;
        //$scope.recipes.names = data.names;
    });
    
    
    
    
    
    //$scope.recipe.getAllRecipes = function(){
        
        
    //    RecipesFactory.getAllRecipes().then(function(data){
    //        //console.log("recipescontroller.js: " + data.response);   
    //    });
    //}
}]);