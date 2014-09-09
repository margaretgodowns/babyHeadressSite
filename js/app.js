angular.module("babyAmazon",
  [
    "localProducts",
    "ngRoute"
  ])

  .config(function($routeProvider){

    $routeProvider
      .when("/", {
        templateUrl: "views/listOfProducts.html",
        controller: "homeCtrl"
      })

      .otherwise({
        redirectTo: "/"
      });

  });
