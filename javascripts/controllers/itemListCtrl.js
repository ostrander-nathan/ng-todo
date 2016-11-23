"use strict";

app.controller("ItemListCtrl", function($scope,$rootScope,ItemFactory){
  $scope.items = [];

  let getItems = function(){
  	console.log("test",$rootScope.user)
    ItemFactory.getItemList($rootScope.user.uid).then(function(fbItems){
      $scope.items = fbItems;
      console.log("anything")
    });
  };
  
  getItems();

  $scope.deleteItem = function(itemId){
    ItemFactory.deleteItem(itemId).then(function(response){
      getItems();
    });
  };

  $scope.inputChange = function(thingy){
    ItemFactory.editItem(thingy).then(function(response){

    })
  };

});