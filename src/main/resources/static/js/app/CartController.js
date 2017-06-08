     app.controller("CartController", function($scope,$http,$stateParams,$localStorage,myService) {
        
            console.log("In CartController");
            $scope.data = $localStorage.ls;
            $scope.finalTotal=0;
            console.log($scope.data);
            for(var i=0;i<$scope.data.length;i++){
                console.log($scope.data[i].total);
                $scope.finalTotal=$scope.finalTotal+$scope.data[i].total;
            }

            $scope.delete=function(z){
                var arr= $scope.data;
                var i= arr.indexOf(z);
                  return arr.splice(i,1);
                };
  

            	console.log("Inside Query"+$stateParams.query);
            	var productList=myService.getData('/api/search/'+$stateParams.query);
            	productList.then(function(result){
               	$scope.content =result; 
                });
            	
            
        });