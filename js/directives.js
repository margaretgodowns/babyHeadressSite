angular.module("app.directives", [])

  .directive("productsDirective", function() {
    return {
      restrict: "E",
      $scope: {
        image: "@",
        name: "@",
        description: "@",
        price: "@"
      },
      templateUrl: "views/productsDirective.html",
    }
  })

  .directive("showAloneDirective", function() {
    return{
      restrict: "E",
      $scope: {
        image: "@",
        name: "@",
        price: "@",
        description: "@",
        reviews: "@"
      },
      templateUrl: "views/showAloneDirective.html",
    }
  })

  // .directive("cartDirective", function() {
  //   return {
  //     restrict: "E",
  //     $scope: {
  //       image: "@",
  //       name: "@",
  //       price: "@",
  //     }
  //     templateUrl: "views/productViews/shoppingCart.html",
  //   }
  // });
