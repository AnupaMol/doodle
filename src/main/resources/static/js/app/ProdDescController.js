     app.controller("ProdDescController", function($scope,$http,myService,$stateParams,$localStorage) {
    	 	
            console.log("In ListController");
     //       $scope.category = ["Laptop", "Mobile", "TV","SmartPhones","Power bank","USB","Chargers"];
          
            $scope.prodId = $stateParams.prodId; 
            $scope.currentMerchantName=";";
            $scope.currentMerchantPrice=90;
            var jsonData=myService.getData('/api/getProduct/'+$scope.prodId);
            jsonData.then(function(result){
                $scope.content =result;
                console.log(result);
                $scope.currentMerchantName=$scope.content.otherMerchantToOffer[0].name;
                $scope.currentMerchantPrice=$scope.content.otherMerchantToOffer[0].price;
                console.log("name-- "+ $scope.currentMerchant);
            });
            
            

            $scope.getProdMerchantFeed=function(prodId,merchId,index){
            	console.log(index);
            	$scope.currentMerchantName=$scope.content.otherMerchantToOffer[index].name;
            	$scope.currentMerchantPrice=$scope.content.otherMerchantToOffer[index].price;
                console.log("New Merchant"+ $scope.currentMerchantName);
            	var jsonData=myService.getData('/api/getProductMerchantFeedback/'+prodId+"/"+merchId);
                jsonData.then(function(result1){
                	console.log(" feedback aa raha hai"+prodId,merchId);
                    $scope.content.productRatingReviews=result1;
                    console.log(result1);
                });
            }

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
//                $localStorage.$reset();
   
                var obj = { name: $scope.content.name, 
                            prodId: $scope.content.prodId,
                            seller: $scope.content.otherMerchantToOffer[0].name,
                            sellerid: $scope.content.otherMerchantToOffer.id,
                            price: $scope.content.otherMerchantToOffer[0].price,
                            image: $scope.content.imageurl,
                            qty: $scope.qty,
                            total: ($scope.qty*$scope.content.otherMerchantToOffer[0].price)
                           };
                
                arrobj= $localStorage.ls;
                console.log('initial',arrobj);
                arrobj.push(obj);
                
                $localStorage.ls= arrobj;
                
                var data = $localStorage.ls;
                console.log(data);
                
                for(var j=0;j<data.length;j++)
                    {
                        console.log(data[j].name);
                    }
               
                
                 $scope.qty="";
            };
        });




  