module.factory('LoginFactory',['$resource', '$location', '$rootScope', function($resource, $location, $rootScope){
    
    var factory = {};
    factory.login = function(userData){
        console.log("loginfactory: Logging in. UserData.username = " + userData.username  + ", UserData.password = " + userData.password);
        //console.log("loginfactory: Logging in. UserData.password = " + userData.password);
        
        var res = $resource('/app/login',{},{post:{method:'POST'}});
        res.post(userData).$promise.then(function(data){
            console.log("loginfactory.js: logged in = " + data.loggedin + " Username: " + data.username);
            if(!data.loggedin){
                console.log("loginfactory.js: Cannot login!")   
            }
            else{
                console.log("loginfactory.js: User in logged in!")  
                $location.path('/recipes');
            }
            
           
        });
    
    }
    
    
    factory.logout = function(){
        console.log("loginfactory.js: Logging out!");        
        $resource('/app/logout').get().$promise.then(function(){
            $location.path('/');
        });
    }
   
    return factory;
}]);