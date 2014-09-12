angular.module("babyAmazon",
  [
    "localProducts",
    "app.directives",
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
