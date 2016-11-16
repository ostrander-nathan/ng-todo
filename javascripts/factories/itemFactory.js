"use strict";

app.factory("itemFactory", function($q, $http, FIREBASE_CONFIG){

	var getItemList = function(){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
			.success(function(response){
				let items=[];
				Object.keys(response).forEach(function(key){
					response[key].id = key;
					items.push(response[key])
				});
					resolve(items);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			})
		})
	}

return{getItemList:getItemList}

})