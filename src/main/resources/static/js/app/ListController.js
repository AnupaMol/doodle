     app.controller("ListController", function($scope,$http,$stateParams,myService) {
        
            console.log("In ListController");
           // $rootScope.category = ["Laptop", "Mobile", "TV","SmartPhones","Power bank","USB","Chargers"];
          
            $scope.categoryId = $stateParams.categoryId;
            var jsonData=myService.getData('/api/listByCategory/'+$scope.categoryId);
            jsonData.then(function(result){
                $scope.content =result;
                console.log(result);
            });
            
            //By Vivek
            
               
        });