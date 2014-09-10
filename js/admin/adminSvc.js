angular.module("admin")
  .factory("adminSvc", function ($http, $rootScope, $log) {

    var urlBase = "http://tiy-fee-rest.herokuapp.com/collections/mgodowns";

    var getProducts = function() {

      return $http.get(urlBase);

    };

    var getProduct = function(id) {

      return $http.get(urlBase + "/" + id);

    };


    var addProduct = function(product) {
      return $http.post(urlBase, product).then(function(response) {
        $rootScope.$broadcast("product:added");
        $log.info("product:added");
      })

    };

    var editProduct = function(product) {
      return $http.put(urlBase + "/" + product._id, product).then(function(response) {
        $rootScope.$broadcast("product:edited");
        $log.info("product:edited");
      })

    };

    var deleteProduct = function(id) {
      return $http.delete(urlBase + "/" + id);//.then(function(response) {
      //   $rootScope.$broadcast("product:deleted");
      //   $log.info("product:deleted");
      // })

    };

    return{
      getProducts: getProducts,
      getProduct: getProduct,
      addProduct: addProduct,
      editProduct: editProduct,
      deleteProduct: deleteProduct

    }
  });
