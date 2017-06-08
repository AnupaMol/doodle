'use strict';

var app = angular.module('doodle', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
          $urlRouterProvider.otherwise('/');
          $stateProvider
          .state('list', {
                url: '/list/:categoryId',
                templateUrl: 'productlist.html',
                controller: 'ListController'
                
            })
            .state('product', {
                url: '/prodlist/:prodId',
                templateUrl: 'prod_desc.html',
                controller: 'ProdDescController'
                
            })

            .state('searchproduct', {
                url: '/search/:query',
                templateUrl: 'searchlist.html',
                controller: 'SearchController'
                
            })
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'HomeController'
                
            })
            .state('userorder', {
                url: '/userorder/:email',
                templateUrl: 'order.html',
                controller: 'OrderController'
                
            })
            .state('usercart', {
                url: '/usercart/',
                templateUrl: 'cart.html',
                controller: 'CartController'
                
            })
           

}]);
app.run(function($rootScope,$http,$window){
	$rootScope.UserOrder=function(){
		console.log("Insie user email");
		var email= document.getElementById("email").value;
		console.log(email);
		$window.location.href = '#!/userorder/'+email;
	}
	$rootScope.search=function(){
		console.log("Insie app searchcs");
		var query= document.getElementById("searchBox").value;
		console.log(query);
		$window.location.href = '#!/search/'+query;
      }
$rootScope.category =[];
$http.get('/api/getCategory').then(function (response) {
	$rootScope.category = response.data;
	console.log($rootScope.category);
});
}); 
app.factory('myService', function($http) {

    var getData = function(file) {

        // Angular $http() and then() both return promises themselves 
        return $http({method:"GET", url:file}).then(function(result){

            // What we return here is the data that will be accessible 
            // to us after the promise resolves
            return result.data;
        });
    };
    var getTime = function() {

        // Angular $http() and then() both return promises themselves 
        return $http({method:"GET", url:'www.json-time.appspot.com/time.json?tz=America/Chicago&callback=foo'}).then(function(result){

            // What we return here is the data that will be accessible 
            // to us after the promise resolves
            //alert(result);
            //alert("hello");
            //alert(result.dateString);
            return result.datetime;
        });
    };


    return { getData: getData , getTime:getTime};
});
