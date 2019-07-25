var app = angular.module('SHP-Web', []);
app.controller('LandingCtrl', function($scope, $http) {
	$scope.Title = "Landing Page";

    $scope.loaded = false;
    
    //When Data is loaded
    $scope.loaded = true;
   
});