     app.controller("CartController", function($scope,$http,$stateParams,myService) {
        
            console.log("In CartController");
            var query= document.getElementById("chkemail").value;
            
             $scope.xx=[{
              "productId":20,
              "merchantId":2,
              "orderQuantity":3 ,
              "orderStatus":"Approved",
              "productPrice":3333, 
              "userEmail":query
            },
            {
              "productId":20,
              "merchantId":2,
              "orderQuantity":3 ,
              "orderStatus":"Approved",
              "productPrice":3333, 
              "userEmail":query
            },
            {
              "productId":20,
              "merchantId":2,
              "orderQuantity":3 ,
              "orderStatus":"Approved",
              "productPrice":3333, 
              "userEmail":query
            }];

            	console.log("Inside Query"+$stateParams.query);
            	var productList=myService.getData('/api/search/'+$stateParams.query);
            	productList.then(function(result){
               	$scope.content =result; 
                });
            	
            
        });