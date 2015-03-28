module.controller('NavController',['$scope','$location','LoginFactory',function($scope,$location,LoginFactory){
    
    $scope.nav = {};
    $scope.nav.logout = function(){
        LoginFactory.logout();
    }
    
    $scope.nav.allRecipes = function(){
        $location.path('/recipes');
    }
    
    
    $scope.nav.newRecipe = function(){
        $location.path('/newrecipe');
    }
    
    
    $scope.nav.foodstuff = function(){
        console.log("navcontroller.js: You just clicked FOODSTUFF!!");
        $location.path('/foodstuff'); 
    }
    
    $scope.nav.addFoodstuff = function(){
        $location.path('/addfoodstuff');
    }
                
    
                  
    
    
    
    
}]);