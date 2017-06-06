  app.controller('prodDesc', ['$scope', '$localStorage', '$http', function($scope, $localStorage, $http) {
                $scope.qty;
                $scope.xx=[{
                    "name":"iphone 6s",
                    "price":"$250",
                    "image":"img/apple.jpeg",
                    "seller":"seller1",
                    "rating":5,
                    "usp":"",
                    "desc":["jshiwhciwdhbc,jdnckjdcdjwc.jdbcdbcdbc",
                  "djhgdjcfgdhcgdhcgvdskhjcgdkyucgdhcvhgcvckyhagvcghcvac",
                  "hdfgkyvgwuygvuybvuyvbruyvruyfhewucnjhvbfuybvrvyrvbyr"],
                    "attr":"",
                    "pid":""
                }];
                
            $scope.addTocart = function(){
                
                for (var i in $scope.xx){

                    $localStorage.setItem('name',i.name);
                    $localStorage.setItem('pid',i.pid);
                     $localStorage.setItem('image',i.image);
                     $localStorage.setItem('price',i.price);
                    $localStorage.setItem('seller',i.seller);
                }
                console.log("Inside cart function");
                console.log($scope.qty);
                $localStorage.setItem = ('qty',$scope.qty);
                console.log("local storage set");
                $scope.qty = "";                
                console.log("qty empty");
                console.log($scope.qty);
                console.log($localStorage.getItem('name'));
                alert("item added to cart");
            };
                
                $scope.merchants=[{
                    "id":1298,
              "price":20,
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "rating": 4,
              "name":"kuchbi" ,
              "seller":"seller3" 
            },
            {
              "price":21,
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "rating": 3,
              "name":"Iphone 5s" ,
              "seller":"seller5"
            },
            {
              "price":24,
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "rating": 6,
              "name":"Iphone 6s black" ,
              "seller":"seller4"
            }];

        
            
            var jsonData=myService.getData('http://localhost:8080/api/listProd/1');
            jsonData.then(function(result){
                $scope.content =result;
                console.log(result);
            });
            
        });




  