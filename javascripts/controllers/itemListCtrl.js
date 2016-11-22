"use strict";
app.controller("itemListCtrl", function($scope, itemFactory){
	$scope.items = []; // items is a empty array

	let getItems = function(){ // getItems function 
		itemFactory.getItemList().then(function(fbItems){ // calls itemfactory then find getItemList function and then receive data back
			$scope.items = fbItems; // stores fbItems in $scope.items
		})
	}
	getItems(); // call getItems function

	$scope.deleteItem = function(itemId){
		console.log("you deleted me");
		itemFactory.deleteItem(itemId).then(function(response){
			getItems();
		})
	}
	$scope.inputChange = function(thingy){
		itemFactory.editItem(thingy).then(function(response){
			console.log("ctrl inputChange response",response );
		})
	}
})