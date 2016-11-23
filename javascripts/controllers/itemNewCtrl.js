"use strict";
app.controller("ItemNewCtrl", function($scope, $location, $rootScope, ItemFactory){
	$scope.newTask = {}; // newTask is assigned to a empty object

	$scope.addNewItem = function(){ // function called addNewItem with showListView set to true for display
		$scope.newTask.isCompleted = false; // new task is a empty object that is 
		$scope.newTask.uid = $rootScope.user.uid;
		ItemFactory.postNewItem($scope.newTask).then(function(itemId){
			$location.url("/items/list");
			$scope.newTask = {};

		});
	};
});