var app = angular.module('SHP-Web', []);
app.controller('JudgingCtrl', function($scope, $http) {
	$scope.Title = "Our Judging Panel";

    $scope.loaded = false;
    $http.get('https://my.api.mockaroo.com/judges.json?key=3e684640').
        then(function(response) {
            $scope.Judges = response.data;
            //When Data is loaded
            $scope.loaded = true;
        });
    
   
});