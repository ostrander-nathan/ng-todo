"use strict";

app.controller("NavCtrl", function($scope){ // NAV CONTROLLER LINE 4 holds a array of nav headers 
	
	$scope.navItems = [{
		name:"Logout",
		url: "#/Logout"
	},
	{
		name:"All Items",
		url: "#/items/list"
	},
	{
		name:"New Item",
		url:"#items/new"
	}
	];
});
