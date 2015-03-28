var module = angular.module('Resepti',['ngRoute','ngResource','ngAnimate','ngCookies']);

module.config(function($routeProvider,$locationProvider,$httpProvider){
  
    $locationProvider.html5Mode(true);
    $routeProvider.when('/',{
        templateUrl:'partials/login.html',
        controller:'LoginController'
    });
    
    $routeProvider.when('/recipes',{
        templateUrl:'partials/recipes.html',
        controller:'RecipesController',
        resolve:{loginRequired:loginRequired}
    });
    
    $routeProvider.when('/newrecipe',{
        templateUrl:'partials/newrecipe.html',
        controller:'NewRecipeController',
        resolve:{loginRequired:loginRequired}
    });
    
    $routeProvider.when('/foodstuff',{
        templateUrl:'partials/foodstuff.html',
        controller:'FoodstuffController',
        resolve:{loginRequired:loginRequired}
                        
    });
      
    $routeProvider.when('/addfoodstuff',{
        templateUrl:'partials/addfoodstuff.html',
        controller:'AddFoodstuffController',
        resolve:{loginRequired:loginRequired}
    });
});

function loginRequired($q,$location,$resource){
    
    var deferred = $q.defer();
        
    $resource('/authenticate').get().$promise.then(function(auth){
        
        if(auth.authenticated){
            console.log("app.js: authenticated = true"); 
            deferred.resolve();
        }
        else{
            console.log("app.js: authenticated = false");
            deferred.reject();
            $location.path('/');
        }
    });
    
    return deferred.promise;
}