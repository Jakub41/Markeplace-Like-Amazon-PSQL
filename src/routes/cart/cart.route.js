// Express
const express = require("express");
// Router
const router = express.Router();
// DB models
const product = require("../../models/product");
const mdl_review = require("../../models/review");
const mdl_cart = require("../../models/cart");
// Validations middleware
const check = require("../../middlewares/index.middleware");

const { pool } = require("../../db/connect");

const helper = require("../../helpers/helper");

// Generate new cart
router.post("/", check.rules, async (req, res) => {
    respon = helper.common_response();

    is_okay = await mdl_cart.add_new_cart();
    if (is_okay != null) {
        respon.status = 201;
        respon.data = {
            cart_id: is_okay
        };
        respon.message = "successfully added.";
    } else {
        respon.status = 500;
        respon.message = "Error in adding";
    }

    res.status(respon.status).json(respon);
});

// Routes
module.exports = router;
