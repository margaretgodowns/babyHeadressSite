angular.module("babyAmazon")

  .controller("homeCtrl", function($scope, $log){

    $scope.inventory = localProductsSvc.getInventory();
    $log.info("getting inventory");

    $scope.deleteItem = function(index) {
      localProductsSvc.deleteInventoryItem(index);

    };

  });
