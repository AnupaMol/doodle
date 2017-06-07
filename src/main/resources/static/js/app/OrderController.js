app.controller("OrderController", function($scope,$http) {
            
            $scope.orderitem=[{
              
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "name":"Iphone 6s 64GB White" ,
              "seller":"emobile",
              "quantity":2, 
              "orderstatus":"Delivered"
            },
            {  
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "name":"Iphone 6s 64GB White" ,
              "seller":"emobile",
              "quantity":2, 
              "orderstatus":"Delivered"

            },
            {
                
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "name":"Iphone 6s 64GB White" ,
              "seller":"emobile",
              "quantity":2, 
              "orderstatus":"Delivered"

            }];
            $scope.orders=[{
              
              "id":3234,
              "date":"23/2/2015" ,
              "total":232323,
              "totalitems":2, 
            },
            {  
              "id":3234,
              "date":"23/2/2015" ,
              "total":232323,
              "totalitems":2,

            },
            {
                
             "id":3234,
              "date":"23/2/2015" ,
              "total":232323,
              "totalitems":2,

            }];
            $scope.category = ["Laptop", "Mobile", "TV","SmartPhones","Power bank","USB","Chargers"];
            $scope.IsVisible = false;
            $scope.ShowHide = function () {
                $scope.IsVisible = $scope.IsVisible ? false : true;
            };
            // $http.get('http://localhost:8080/getprod').then(function (response) {
            //     $scope.content = response;
            // });
        });