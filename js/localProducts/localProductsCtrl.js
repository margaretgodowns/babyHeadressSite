angular.module("localProducts")

  .controller("localProductsCtrl", function($scope, localProductsSvc, $routeParams, $location, $rootScope){

    $scope.inventory = localProductsSvc.getInventory();
    $scope.shoppingCart = localProductsSvc.getShoppingCart();
    $scope.soloProduct = localProductsSvc.getProduct($routeParams.idx);
    $scope.idx = $routeParams.idx;
    // console.log($scope.soloProduct)

    // $scope.create = function(product){
    //
    //   localProductsSvc.addProduct({
    //
    //     name: product.name,
    //     price: product.price,
    //     description: product.description,
    //     image: product.image
    //
    //   });
    //
    //   $location.path("/")
    //
    // };

    // $rootScope.$on("product:added", function(){
    //   $scope.inventory = localProductsSvc.getInventory();
    //
    // });

    $scope.addToCart = function(product) {
      localProductsSvc.addToCart({

        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image

      });

      $location.path("/listOfProducts")
      //$location.path("/showAlone/{{idx}}") --this removes everything but stays on showAlone page

    };

    $rootScope.$on("product:addedToCart", function(){
      $scope.shoppingCart = localProductsSvc.getShoppingCart();

    });

    $scope.removeFromCart = function (idx) {
      localProductsSvc.removeFromCart (idx);
    };

    $rootScope.$on("product:removedFromCart", function() {
      $scope.shoppingCart = localProductsSvc.getShoppingCart();

    });

    $scope.addReview = function (review) {
        var index = $routeParams.idx;
        localProductsSvc.addReview(index,review);
        $scope.newReview = {}
      }



  });
