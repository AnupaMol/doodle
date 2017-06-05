
var app = angular.module('doodle',['ui.router']);
 
app.constant('urls', {
    INVENTORY_SERVICE_API : 'http://localhost:8080/inventory/';
});
 
app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
 
        $stateProvider
            .state('home', {
                url: '/productlist',
                templateUrl: 'productlist',
                controller:'ListController',
            });
        $urlRouterProvider.otherwise('/');
    }]);