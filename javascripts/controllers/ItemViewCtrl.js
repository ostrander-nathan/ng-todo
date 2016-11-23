"use strict";
app.controller("ItemViewCtrl", function($scope, $routeParams, ItemFactory){
	$scope.selectedItem = {};
	let itemId = $routeParams.id;

	ItemFactory.getSingleItem(itemId).then(function(oneItem){
		oneItem.id = itemId;
		console.log("oneItem view",oneItem );
		$scope.selectedItem = oneItem;
	})
})