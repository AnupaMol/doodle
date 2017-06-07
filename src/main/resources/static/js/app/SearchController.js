     app.controller("SearchController", function($scope,$http,$stateParams,myService) {
        
            console.log("In SearchController");
           // $rootScope.category = ["Laptop", "Mobile", "TV","SmartPhones","Power bank","USB","Chargers"];
          
      
            
            //By Vivek
            
            
            	console.log("inside query");
           	    //var query = document.getElementById("searchBox").value;
            	console.log("Inside Query"+$stateParams.query);
            	var productList=myService.getData('/api/search/'+$stateParams.query);
            	productList.then(function(result){
               	$scope.content =result; 
                });
            	
            
        });