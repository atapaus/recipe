module.controller('FoodstuffController', ['$scope', '$location', '$rootScope', 'FoodstuffFactory', '$timeout', function($scope, $location, $rootScope, FoodstuffFactory, $timeout){
    
    
    $scope.foodstuff = {};
    
    console.log("foodstuffcontroller.js: Gettin all foodstuff from db!");
    
    FoodstuffFactory.getAllFoodstuff().then(function(data){
        
        console.log("01 foodstuffcontroller.js: allFoodstuff = " + data);
        console.log("02 foodstuffcontroller.js: JSON.stringify(data)" + JSON.stringify(data));
        
         
     });


    
    


}]);