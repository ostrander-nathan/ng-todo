"use strict";
app.controller("ItemEditCtrl", function($scope, $location,$routeParams, ItemFactory){
	$scope.newTask = {};
	let itemId = $routeParams.id;
	console.log("itemId", itemId )

	ItemFactory.getSingleItem(itemId).then(function(oneItem){
		console.log("oneItem",oneItem )
		oneItem.id = itemId;
		$scope.newTask = oneItem;
	});
	$scope.addNewItem = function(){
		console.log("you edited me");
		ItemFactory.editItem($scope.newTask).then(function(respose){
			$scope.newTask = {};
			$location.url("/items/list");
		});
	};
});