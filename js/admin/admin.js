angular.module("admin", ["ngRoute"])
  .config(function($routeProvider) {

  $routeProvider
  
    .when("/admin", {
      templateUrl: "views/adminViews/adminListOfProducts.html",
      controller: "adminCtrl"
    })

    .when("/admin/:id", {
      templateUrl: "views/adminViews/adminShowAlone.html",
      controller: "adminCtrl"
    })
    //IS THIS CORRECT?//
    .when("/adminAddProduct", {
      templateUrl: "views/adminViews/adminAddProduct.html",
      controller: "adminCtrl"
    })

    .when("/admin/:id/edit", {
      templateUrl: "views.adminViews/adminEdit.html",
      controller: "adminCtrl"
    });


  })
