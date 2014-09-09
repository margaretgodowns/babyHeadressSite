angular.module("localProducts")

  .controller("localProductsCtrl", function($scope, localProductsSvc, $routeParams, $location, $rootScope){

    $scope.inventory = localProductsSvc.getInventory();
    $scope.soloProduct = localProductsSvc.getItem($routeParams.index);

    $scope.create = function(product){

      localProductsSvc.addInventoryItem({

        name: product.name,
        price: product.cost,
        description: product.description,
        image: product.image

      });

      $location.path("/")

    };

    $routeScope.$on("product:added", function(){
      $scope.inventory = localProductsSvc.getInventory();

    });

    $scope.editProduct= function(product){
      localProductsSvc.editInventoryItem()
        $location.path("/");

    };

    $rootScope.$on("product:edited", function(){

      $scope.inventory = localProductsSvc.getInventory();

    });
  });
