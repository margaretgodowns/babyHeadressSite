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
      adminSvc.editProduct(product);//.then(function() {
        //$location.path("/admin")
      //});

    };

    $scope.removeProduct = function (id) {
      adminSvc.deleteProduct(id).then(function() {
      adminSvc.getProducts().then($location.path("/admin"));
    });

    };

  });
