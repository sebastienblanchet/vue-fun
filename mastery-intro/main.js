//Create a new button and method to decrement the value of `cart`.

var app = new Vue({
  el: "#app",
  // data definitions
  data: {
    product: "Socks",
    image: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [{
        variantId: 2234,
        variantColor: "green",
        variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: 90 "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg"
      }
    ],
    cart: 0
  },

  // functions
  methods: {
    addToCart() {
      // this will access data, similar to $scope
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
    removeFromCart() {
      if (this.cart >= 0) {
        this.cart -= 1;
      }
    }
  }
});
