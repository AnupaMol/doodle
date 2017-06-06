     app.controller("ListController", function($scope,$http,myService) {
        
            console.log("In ListController");
            $scope.category = ["Laptop", "Mobile", "TV","SmartPhones","Power bank","USB","Chargers"];
          
            
            var jsonData=myService.getData('http://localhost:8080/api/listProd/1');
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
            
        });