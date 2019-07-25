var app = angular.module('SHP-Web', []);
app.controller('TeamsCtrl', function($scope, $http) {
	$scope.Title = "Teams";

    $scope.loaded = false;
    
    //When Data is loaded
    $scope.loaded = true;
   
});