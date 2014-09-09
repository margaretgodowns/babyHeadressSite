angular.module("babyAmazon",
  [
    "localProducts",
    "ngRoute"
  ])

  .config(function($routeProvider){

    $routeProvider

      .when("/", {
        templateUrl: "views/productViews/listOfProducts.html",
        controller: "homeCtrl"
      })

      .when("/showAlone/:index", {
        templateUrl: "views/productViews/showAlone.html",
        controller: "homeCtrl"
      })

      .otherwise({
        redirectTo: "/"
      });

  });
