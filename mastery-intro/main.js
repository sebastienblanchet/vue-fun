//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

// pass in options
var app = new Vue({
  el: "#app", // put into dic app
  // data you want to bind
  // reactive so data is directly linked
  data: {
    product: "Socks",
    image:
      "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
    link:
      "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks"
  }
});

// can go to cosnsole and directly change it
