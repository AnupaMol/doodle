'use strict';

var app = angular.module('doodle', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
          $urlRouterProvider.otherwise('/');
          $stateProvider
          .state('home', {
                url: '/',
                templateUrl: 'productlist.html',
                controller: 'ListController'
                
            })
            .state('list', {
                url: '/list',
                templateUrl: 'productlist.html',
                controller: 'ListController'
                
            })
           
}]);

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
