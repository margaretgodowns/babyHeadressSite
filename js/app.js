angular.module("babyAmazon",
  [
    "localProducts",
    "admin",
    "ngRoute"
  ])

  .config(function($routeProvider){

    $routeProvider

      .when("/", {
        templateUrl: "views/main.html",
        controller: "homeCtrl"
      })


      .otherwise({
        redirectTo: "/"
      });

  });
