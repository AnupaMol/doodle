     app.controller("ListController", function($scope,$http,myService) {
        
            console.log("In ListController");
            var jsonData=myService.getData('http://localhost:8080/api/listProd/1');
            jsonData.then(function(result){
                $scope.content =result;
                console.log(result);
            });
            
        });