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

      .otherwise({
        redirectTo: "/"
      });

  });
