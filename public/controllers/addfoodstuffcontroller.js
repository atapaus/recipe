module.controller('AddFoodstuffController', ['$scope', '$location', '$rootScope', 'AddFoodstuffFactory', '$timeout', function($scope, $location, $rootScope, AddFoodstuffFactory, $timeout){
    
    $scope.addfoodstuff = {};

    $scope.addfoodstuff.save = function(){
        var foodData = {};
        foodData.name = $scope.foodstuff.name;
        foodData.unit = $scope.foodstuff.unit;
        foodData.price = $scope.foodstuff.price;
        //console.log("addfoodstuffcontroller.js: Name = " + foodData.name + " Unit = " + foodData.unit + " Price = ");
        $scope.foodstuff.name = "";
        $scope.foodstuff.unit = "";
        $scope.foodstuff.price = "";
        AddFoodstuffFactory.save(foodData);
        
    }
    
    
}]);