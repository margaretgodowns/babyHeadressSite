angular.module("babyAmazon",
  [
    "localProducts",
    "admin",
    //"directive",
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
