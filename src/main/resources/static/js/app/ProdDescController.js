     app.controller("ProdDescController", function($scope,$http,myService,$stateParams,storageService) {
        
            console.log("In ListController");
     //       $scope.category = ["Laptop", "Mobile", "TV","SmartPhones","Power bank","USB","Chargers"];
          
            $scope.prodId = $stateParams.prodId; 
            var jsonData=myService.getData('/api/getProduct/'+$scope.prodId);
            jsonData.then(function(result){
                $scope.content =result;
                console.log(result);
            });

            //By Vivek
            
             $scope.search=function(){
            	console.log("inside query");
           	    var query = document.getElementById("searchBox").value;
            	console.log("Inside Query"+query);
            	var productList=myService.getData('http://localhost:8080/api/search/'+query);                productList.then(function(result){
               	$scope.content =result; 
                });
            	
            } 
            
            $scope.addTocart = function(){

                var text = {name: $scope.content.name, 
                            prodId: $scope.content.prodId,
                            seller: $scope.content.otherMerchantToOffer[0].name,
                            sellerid: $scope.content.otherMerchantToOffer.id,
                            price: $scope.content.otherMerchantToOffer[0].price,
                            image: $scope.content.imageurl,
                            qty: $scope.qty,
                            total: ($scope.qty*$scope.content.otherMerchantToOffer[0].price)
                           };
                
                arrayText.push(JSON.stringify(text));
                
                storageService.set('arrayjson', arrayText);
                
                var test2 = storageService.get('arrayjson');
                console.log(test2);
                $scope.qty="";
            };
        });




  