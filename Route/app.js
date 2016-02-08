

var app = angular.module("myApp",["ngRoute"]);

app.config(["$routeProvider",function($routeProvider){
	
    $routeProvider.when("/foodItemsList", {templateUrl:'views/foodItemsList.html', controller: "myCtrl" })
				  .when("/Report/:id",{templateUrl:'views/foodNutrients.html', controller:"myCtrl1"})
				  .otherwise("/foodItemsList");
	
}]);

app.controller('myCtrl', function ($scope, $http) {
    $http.get("http://api.nal.usda.gov/ndb/list?format=json&api_key=ytQUheon12DDjs76TqIOKYXomltoqAamMOiQ0tQi")
    .then(function (response) {
        $scope.names = response.data.list.item;

    });
});

app.controller('myCtrl1', function ($scope, $http, $routeParams) {
    var items = $routeParams.id;
    $http.get("http://api.nal.usda.gov/ndb/reports?ndbno="+items+"&type=f&format=json&api_key=ytQUheon12DDjs76TqIOKYXomltoqAamMOiQ0tQi")
    .then(function (response){
    $scope.foodData =  response.data.report.food.nutrients;
        
            
        });
    
});
