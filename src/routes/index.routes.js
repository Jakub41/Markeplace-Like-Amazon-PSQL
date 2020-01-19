// Express Lib
const express = require("express");
// Routes lib
const router = express.Router();
const config = require("../config/config");

console.log(config);

// Defining the Index Router for Products
router.use(config.product_ep, require("./products/products.route"));
router.use(config.reviews_ep, require("./reviews/reviews.routes"));
router.use(config.cart_ep, require("./cart/cart.route"));

// Exporting the Index Router
module.exports = router;
