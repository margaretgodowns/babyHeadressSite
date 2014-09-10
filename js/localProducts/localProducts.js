angular.module("localProducts",
  ["ngRoute"]
)


  .config(function($routeProvider){

    $routeProvider
      .when("/listOfProducts/", {
        templateUrl: "views/productViews/listOfProducts.html",
        controller: "localProductsCtrl"
      })

      .when("/create", {
        templateUrl: "views/productViews/create.html",
        controller: "localProductsCtrl"
      })

      .when("/shoppingCart", {
        templateUrl: "views/productViews/shoppingCart.html",
        controller: "localProductCtrl"
      })

      .when("/showAlone/:idx", {
        templateUrl: "views/productViews/showAlone.html",
        controller: "localProductsCtrl"
      })

      .when("/showAlone/:idx/edit", {
        templateUrl: "views/productViews/edit.html",
        controller: "localProductsCtrl"
      });


  });
