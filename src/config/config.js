require("dotenv").config();

module.exports = {
    port: process.env.PORT,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db: process.env.DB_,
    product_ep: process.env.PRODUCTS_EP, // Product endpoint url
    reviews_ep: process.env.REVIEWS_EP,
    cart_ep: process.env.CART_EP
};
