(function(){
	var todo = angular.module('myApp',[]);
	todo.controller('mycontrol', function($scope){
		$scope.kranthi={};
		$scope.table=data;
		$scope.addTask= function(){
			console.log("before adding: ", $scope.table);
			$scope.table.push($scope.kranthi);		
			$scope.kranthi={};
			console.log("after adding: ",$scope.table);
		}
	})
	var data=[];
})();	
		