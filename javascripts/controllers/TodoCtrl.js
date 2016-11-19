"use strict";


app.controller("TodoCtrl", function($scope, itemFactory){ // controller called TodoCtrl and passing in itemFactory and $scope
	$scope.welcome = "hello";
	$scope.showListView = true; // show list view is shown to be a boolean value to hide and show
	$scope.newTask = {}; // newTask is assigned to a empty object
	$scope.items = []; // items is a empty array

	let getItems = function(){ // getItems function 
		itemFactory.getItemList().then(function(fbItems){ // calls itemfactory then find getItemList function and then receive data back
			$scope.items = fbItems; // stores fbItems in $scope.items
		})
	}
	getItems(); // call getItems function

	itemFactory.getItemList().then(function(fbItems){ // 
		$scope.items = fbItems;
		console.log("items from controller",fbItems );
	})

	$scope.allItems = function(){ // function called allItems with showListView set to true for display
		console.log("you clicked all items");
		$scope.showListView = true;
	}
	$scope.newItem= function(){ // function called newItems with showListView set to true for display
		console.log("you clicked new item");
		$scope.showListView = false;
	}
	$scope.addNewItem = function(){ // function called addNewItem with showListView set to true for display
		$scope.newTask.isCompleted = false; // new task is a empty object that is 
		console.log("newTask in functon",$scope.newTask);
		itemFactory.postNewItem($scope.newTask).then(function(itemId){
			getItems();
			$scope.newTask = {};
			$scope.showListView = true;
		})
	}
	$scope.deleteItem = function(itemId){
		console.log("you deleted me");
		itemFactory.deleteItem(itemId).then(function(response){
			getItems();
		})
	}
});