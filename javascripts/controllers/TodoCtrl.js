"use strict";


app.controller("TodoCtrl", function($scope, itemFactory){
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items = [];

	let getItems = function(){
		itemFactory.getItemList().then(function(fbItems){
			$scope.items = fbItems;
		})
	}
	getItems();

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
		console.log("newTask in functon",$scope.newTask );
		itemFactory.postNewItem($scope.newTask).then(function(itemId){
			getItems();
			$scope.newTask = {};
			$scope.showListView = true;
		})

	}
});