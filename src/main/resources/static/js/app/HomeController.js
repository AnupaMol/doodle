app.controller("HomeController", function($scope,$http) {
            $scope.category = ["Laptop", "Mobile", "TV","SmartPhones","Power bank","USB","Chargers"];
             $scope.xx=[{
              "price":20,
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "rating": 4,
              "name":"kuchbi" ,
              "seller":3 
            },
            {
              "price":21,
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "rating": 3, 
              "name":"Iphone 5s" ,
              "seller":5
            },
            {
              "price":24,
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "rating": 6,
              "name":"Iphone 6s black" ,
              "seller":5 
            }];

            $http.get('http://localhost:8080/getprod').then(function (response) {
                $scope.content = response;
            });
        });