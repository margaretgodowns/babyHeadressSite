angular.module("admin")
  .controller("adminCtrl", function($scope, $rootScope, $location, $routeParams, adminSvc) {

    adminSvc.getProducts().then(function(products) {

      $scope.products = products.data;

    });

    adminSvc.getProduct($routeParams.id).then(function(response){
      $scope.soloProduct = response.data;

    });

    $scope.addProduct = function(product) {
      adminSvc.addProduct(product).then(function() {
        $location.path("/adminAddProduct");
      });

    };

    $scope.editProduct = function(product) {
      adminSvc.editProduct(product).then(function() {
        $location.path("/admin")
      });

    };

    $scope.deleteProduct = function(product) {
      adminSvc.deleteProduct(product).then(function() {
        $location.path("/admin")
      })

    }

  });
