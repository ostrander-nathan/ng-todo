"use strict";
app.controller("ItemViewCtrl", function($scope, $routeParams, itemFactory){
	$scope.selectedItem = {};
	let itemId = $routeParams.id;

	itemFactory.getSingleItem(itemId).then(function(oneItem){
		oneItem.id = itemId;
		console.log("oneItem view",oneItem );
		$scope.selectedItem = oneItem;
	})
})