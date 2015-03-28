module.controller('LoginController', ['$scope', '$location', '$rootScope', 'LoginFactory', '$timeout', function($scope, $location, $rootScope, LoginFactory, $timeout){
    
    $scope.user = {};
    $scope.user.login = function(){
        var userData = {};
        userData.username = $scope.user.username;
        userData.password = $scope.user.password;
        $scope.user.username = "";
        $scope.user.password = "";
        LoginFactory.login(userData); 
        
        }
    
    $scope.user.logout = function(){
           LoginFactory.logout();
    }
    
    
}]);