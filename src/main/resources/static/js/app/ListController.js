     app.controller("ListController", function($scope,$http,myService) {
            $scope.products = ["Milk", "Bread", "Cheese"];
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
            console.log("In ListController");
            $scope.category = ["Laptop", "Mobile", "TV","SmartPhones","Power bank","USB","Chargers"];
          });
            
            var jsonData=myService.getData('http://localhost:8080/api/listProd/1');
            jsonData.then(function(result){
                $scope.content =result;
                //$scope.content.imageUrl=result.imageurl.split(",")[0];
                //console.log($scope.content.imageUrl);
                console.log(result);
            });
            
        });