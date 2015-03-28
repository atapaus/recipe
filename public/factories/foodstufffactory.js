module.factory('FoodstuffFactory',['$resource', '$location', '$rootScope', function($resource, $location, $rootScope){
    
    var factory = {};
    
    factory.getAllFoodstuff = function(){
        console.log("foodstufffactory.js: Gettin all foodstuff!");
        return $resource('/recipes/foodstuff').get().$promise;  
    }
    
    return factory;
}]);