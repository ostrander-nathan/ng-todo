"use strict";


app.controller("TodoCtrl", function($scope, itemFactory){
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items = [];

	itemFactory.getItemList().then(function(fbItems){
		$scope.items = fbItems;
		console.log("items from controller",fbItems );
	})

	$scope.allItems = function(){
		console.log("you clicked all items");
		$scope.showListView = true;
	}
	$scope.newItem= function(){
		console.log("you clicked new item");
		$scope.showListView = false;
	}
	$scope.addNewItem = function(){
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = $scope.items.length;
		console.log("newTask in functon",$scope.newTask );
		$scope.items.push($scope.newTask);
		$scope.newTask = "";
		$scope.showListView = true;


	}
});