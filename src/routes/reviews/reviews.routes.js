// Express
const express = require("express");
// Router
const router = express.Router();
// Product model
const mdl_review = require("../../models/review");
// Validations middleware
const check = require("../../middlewares/index.middleware");
const { pool } = require("../../db/connect");
const helper = require("../../helpers/helper");

// GET all reviews
router.get("/", check.rules, async (req, res) => {
    respon = helper.common_response();
    all_reveiws = await mdl_review.get_all_reviews();

    respon.data = all_reveiws;

    res.status(respon.status).json(respon);
});

// Add review
router.post("/", check.rules, async (req, res) => {
    respon = helper.common_response();
    is_okay = await mdl_review.add_new_review(
        req.body.comment,
        req.body.rate,
        req.body.product_id
    );
    if (is_okay) {
        respon.status = 200;
        respon.message = "review added";
    } else {
        respon.status = 500;
        respon.message = "Internal error occured";
    }

    res.status(respon.status).json(respon);
});

// delete review
router.delete("/:id", check.rules, async (req, res) => {
    respon = helper.common_response();

    is_okay = await mdl_review.delete_review(req.params.id);
    if (is_okay) {
        respon.status = 200;
        respon.message = "review deleted";
    } else {
        respon.status = 500;
        respon.message = "Internal error occured";
    }

    res.status(respon.status).json(respon);
});

// Routes
module.exports = router;
