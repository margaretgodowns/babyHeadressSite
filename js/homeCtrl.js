angular.module("babyAmazon")

  .controller("homeCtrl", function($scope, localProductsSvc, $rootScope, $log){

    $scope.inventory = localProductsSvc.getInventory();
    $log.info("getting inventory");

  });
