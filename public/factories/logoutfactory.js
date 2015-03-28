module.factory('LogoutFactory',['$resource', '$location', '$rootScope', function($resource, $location, $rootScope){
    
    var factory = {};
    factory.logout = function(){
        console.log("logoutfactory.js: Logging out!");        
        $resource('/app/logout').get().$promise.then(function(){
            $location.path('/');
        });
    }
    
    return factory;
    
}]);