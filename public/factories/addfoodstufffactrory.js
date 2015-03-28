module.factory('AddFoodstuffFactory',['$resource', '$location', '$rootScope', function($resource, $location, $rootScope){
    
    var factory = {};
    factory.save = function(foodData){
        
        console.log("addfoodstufffactory.js: Name = " + foodData.name + " Unit = " + foodData.unit + " Price = " + foodData.price);
        
        var res = $resource('/recipes/addfoodstuff',{},{post:{method:'POST'}});
        res.post(foodData).$promise.then(function(data){
            
            if(data.saved = true){
            
                console.log("addfoodstufffactory.js: Foodstuff saved in db!");
                //$location.path('/user'); 
            }
            else if(data.saved = false){
                console.log("addfoodstufffactory.js: Cannot save foodstuff in db!");  
                //$location.path('/user'); 
            }
            
        });
    }
    return factory;
}]);