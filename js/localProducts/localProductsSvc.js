angular.module("localProducts")

  .factory("localProductsSvc", function($rootScope, $log){

    var _inventory = [
    {
      name: "Glasgow",
      price: 25,
      image: "http://images.cdn.bigcartel.com/bigcartel/product_images/142456717/max_h-1000+max_w-1000/IMG_0844.JPG",
      description: "The Glasgow Head wrap is inspired by the rich tartans of Scotland.",
      reviews: []
    },
    {
      name: "Arusha",
      price: 25,
      image: "http://images.cdn.bigcartel.com/bigcartel/product_images/142456639/max_h-1000+max_w-1000/IMG_0849.JPG",
      description: "Inspired by the bustling streets of Arusha in Eastern Africa, this fabric is vintage and a limited edition piece this Fall.",
      reviews: []
    },
    {
      name: "Rio",
      price: 15,
      image: "http://images.cdn.bigcartel.com/bigcartel/product_images/142457386/max_h-1000+max_w-1000/IMG_0858.JPG",
      description: "Inspired by Brazil, the worlds leading producer of coffee beans. This chunky knit brown and white striped turban has me thinking café com leite!",
      reviews: []
    },
    {
      name: "Copenhagen",
      price: 50,
      image: "http://images.cdn.bigcartel.com/bigcartel/product_images/142457443/max_h-1000+max_w-1000/IMG_0866.JPG",
      description: "Large cream roses on a satin ribbon. Simplicity as easy as it comes without sacrificing quality.",
      reviews: []
    }
    ];

    var getInventory = function(){
      return _inventory;
    };

    var getProduct = function(index){
      return _inventory[index];
    };

    var addReview = function (idx, review) {
      _inventory[idx].reviews.push(review);
    };

    //shopping cart functions//

    var _shoppingCart = [];

    var getShoppingCart = function(){
      return _shoppingCart;
    };

    var getCartProduct = function(idx){
      return _shoppingCart[index];
    }

    var addToCart = function(product){
      _shoppingCart.push(product);
      $rootScope.$broadcast("product:addedToCart");
      $log.info("product: addedToCart");
    };

    var removeFromCart = function(idx) {
      _shoppingCart.splice(idx,1);
      $rootScope.$broadcast("product:removed");
      $log.info("product:removed");
    };


  return {

      getInventory:getInventory,
      getProduct:getProduct,
      getShoppingCart: getShoppingCart,
      getCartProduct: getCartProduct,
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      addReview:addReview

    };


  });
