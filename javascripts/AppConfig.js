"use strict";

app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG); // run and initalize firebase config
});

app.config(function($routeProvider){ /// only used for routes no DOM manipulation
	$routeProvider
		.when('/items/list',{
			templateUrl: 'partials/item-list.html',
			controller: 'itemListCtrl'
		})
		.when('/items/new', {
			templateUrl: 'partials/item-new.html',
			controller: 'itemNewCtrl'
		})
		.when('/items/view/:id',{ // colon tells that the id will change
			templateUrl: 'partials/item-view.html',
			controller: 'ItemViewCtrl'
		})
		.when('/items/edit/:id', {
			templateUrl: 'partials/item-new.html',
			controller: 'ItemEditCtrl'
		})
		.otherwise('/items/list') // redirects to what you want to direct
})