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
		.otherwise('/items/list') // redirects to what you want to direct
})