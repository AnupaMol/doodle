    app.controller("CartController", function($scope,$http,$stateParams,$localStorage,myService,$window) {
        	$scope.data = $localStorage.ls;
            console.log("In CartController");
            $scope.finalTotal=0;
            console.log($scope.data);
            for(var i=0;i<$scope.data.length;i++){
                console.log($scope.data[i].total);
                $scope.finalTotal=$scope.finalTotal+$scope.data[i].total;
            }

            $scope.delete=function(index){
                if (index > -1) {
            $scope.data.splice(index, 1);

                }
                $scope.finalTotal=0;
                 for(var i=0;i<$scope.data.length;i++){
                console.log($scope.data[i].total);

                $scope.finalTotal=$scope.finalTotal+$scope.data[i].total;
            }
            }
            
            $scope.Checkout=function(){
            var email=document.getElementById("chkemail").value;
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(email)){
            	var listOfProd=[];
                for(var i=0;i<$scope.data.length;i++){
                	var obj={};
                	obj["productId"]=$scope.data[i].prodId;
                	obj["merchantId"]=$scope.data[i].sellerid;
                	obj["productName"]=$scope.data[i].name;
                	obj["userEmail"]=email;
                	obj["orderQuantity"]=$scope.data[i].qty;
                	obj["orderStatus"]="Approved";
                	obj["productPrice"]=$scope.data[i].price;
                	console.log("single");
                	console.log(obj);
                	listOfProd.push(obj);
                	          	
                }
                console.log(listOfProd);
                $http.post('/api/addOrder', JSON.stringify(listOfProd)).then(function (response) {
                	console.log(response.data.message);
                	if (response.data.message=="Success"){
                		console.log("orderPlaced");
                		$localStorage.ls=[];
                		alert("orderPlaced");
                		
                		$window.location.href = '#!/userorder/'+email
                	}else{
                		alert(response.data.message);
                		console.log("orderNot Placed");
                	}
                	
                	});
            }
            
            
            }
        });