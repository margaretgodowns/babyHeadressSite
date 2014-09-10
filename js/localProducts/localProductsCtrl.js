angular.module("localProducts")

  .controller("localProductsCtrl", function($scope, localProductsSvc, $routeParams, $location, $rootScope){

    $scope.inventory = localProductsSvc.getInventory();
    $scope.shoppingCart = localProductsSvc.getShoppingCart();
    $scope.soloProduct = localProductsSvc.getProduct($routeParams.idx);
    $scope.idx = $routeParams.idx;
    console.log($scope.soloProduct)

    $scope.create = function(product){

      localProductsSvc.addProduct({

        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image

      });

      $location.path("/")

    };

    $rootScope.$on("product:added", function(){
      $scope.inventory = localProductsSvc.getInventory();

    });

    $scope.addToCart = function(product) {
      localProductsSvc.addToCart({

        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image

      });

      $location.path("/shoppingCart")
    };

    $rootScope.$on("product:addedToCart", function(){
      $scope.shoppingCart = localProductsSvc.getShoppingCart();

    });


    $scope.editProduct= function(product){

      localProductsSvc.editProduct({

        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image

      },

      $scope.idx

      );

        $location.path("/");

    };

    $rootScope.$on("product:edited", function(){

      $scope.inventory = localProductsSvc.getInventory();

    });

    $scope.deleteProduct = function() {

      localProductsSvc.deleteProduct($scope.idx);

    };

    $rootScope.$on("product:deleted", function() {
      $scope.inventory = localProductsSvc.getInventory();

    });


  });
