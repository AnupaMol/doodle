'use strict';

var app = angular.module('doodle', ['ui.router','ngStorage'])
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
                url: '/usercart',
                templateUrl: 'cart.html',
                controller: 'CartController'
                
            })
           

}]);
app.run(function($rootScope,$http,$window){
	$rootScope.orderCarts=function(){
		console.log("carts");
		$window.location.href = '#!/usercart';
	}
	$rootScope.UserOrder=function(){
		console.log("Insie user email");
		var email= document.getElementById("email").value;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(re.test(email)){
        $window.location.href = '#!/userorder/'+email;
         $('.modal').modal('close');
        }
		
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
    


    return { getData: getData };
});
