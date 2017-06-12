app.controller("OrderController", function($scope,$http,myService,$stateParams) {
	$scope.feedback=[];
	$scope.rating=[];
  $scope.useremail=$stateParams.email;
	console.log($stateParams.email);
	var orderList=myService.getData('/api/getOrderByEmail/'+$stateParams.email);
	orderList.then(function(result){
   	$scope.content =result;
   	console.log($scope.content);
    });
	
	$scope.addFeedback=function(index,prodId,merchId){
		
		console.log(index);
		console.log(prodId);
		console.log(merchId);
		var rating=$scope.rating[index];//
		var  review=$scope.feedback[index];
		
		if(review!=null && (rating!=0 || rating!="0" || rating!="")){
		var email=$stateParams.email;
		var obj={};
		obj["productId"]=prodId;//
		obj["merchantId"]=merchId;//
		obj["custEmail"]=email;
		obj["rating"]=rating;//
		obj["review"]=review;//
		
		$http.post('/api/addFeedback', JSON.stringify(obj)).then(function (response) {
        	
        	console.log(response.data);
        	});
		}
		else{
			alert('Please give review and rating both');
		}
	}
	
	    $('.collapsible').collapsible();
	 
            $scope.orderitem=[{
              
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "name":"Iphone 6s 64GB White" ,
              "seller":"emobile",
              "quantity":2, 
              "orderstatus":"Delivered"
            },
            {  
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "name":"Iphone 6s 64GB White" ,
              "seller":"emobile",
              "quantity":2, 
              "orderstatus":"Delivered"

            },
            {
                
              "image":"img/apple-iphone-6s-mn112hn-a-original-imaen3f3dynmw8fg.jpeg",
              "name":"Iphone 6s 64GB White" ,
              "seller":"emobile",
              "quantity":2, 
              "orderstatus":"Delivered"

            }];
            $scope.orders=[{
              
              "id":3234,
              "date":"23/2/2015" ,
              "total":232323,
              "totalitems":2, 
            },
            {  
              "id":3234,
              "date":"23/2/2015" ,
              "total":232323,
              "totalitems":2,

            },
            {
                
             "id":3234,
              "date":"23/2/2015" ,
              "total":232323,
              "totalitems":2,

            }];
            $scope.category = ["Laptop", "Mobile", "TV","SmartPhones","Power bank","USB","Chargers"];
            $scope.IsVisible = false;
            $scope.ShowHide = function () {
                $scope.IsVisible = $scope.IsVisible ? false : true;
            };
            
        });