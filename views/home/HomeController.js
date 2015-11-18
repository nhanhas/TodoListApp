app
.controller('HomeController', ['$scope', '$location', function($scope, $location) { 
		//side bar variable
		$scope.move = false;

		$scope.navigate = function (path) {
			$location.path(path);
		};

}]);


