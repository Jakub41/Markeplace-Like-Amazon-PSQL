// We import the helpers as we need to interact with our data
const helper = require("../helpers/helper");
const { pool } = require("../db/connect");
const product = require("./product");

const get_all_reviews = async (product_id = null) => {
    all_reviews = null;
    sql_values = [];

    if (product_id) {
        // fetch product id number.
        one_product = await product.getOneProduct(product_id);

        sql_ = "SELECT * FROM reviews WHERE product_id = $1;";
        sql_values = [one_product.data[0]._id];
    } else {
        sql_ = "SELECT * FROM reviews;";
    }

    await pool.connect().then(client => {
        return client
            .query(sql_, sql_values)
            .then(data => {
                client.release();
                all_reviews = data.rows;
            })
            .catch(e => {
                client.release();
                console.log("============[ERROR]=============");
                all_reviews = e;
            });
    });

    return all_reviews;
};

const add_new_review = async (comment, rate, product_id) => {
    // fetch product id number.
    one_product = await product.getOneProduct(product_id);
    if (one_product.length < 1) {
        return 0; // no product associated with the provided product_id
    }

    query =
        "INSERT INTO reviews(comment, rate, product_id, created_at, rew_id) " +
        "VALUES($1, $2, $3, $4, $5);";
    values = [
        comment,
        rate,
        one_product.data[0]._id,
        helper.newDate(),
        helper.getNewId()
    ];

    error = 1;
    await pool.connect().then(client => {
        return client
            .query(query, values)
            .then(data => {
                client.release();
            })
            .catch(e => {
                client.release();
                console.log("============[ERROR]=============");
                console.log(e.stack);
                error = 0;
            });
    });

    return error;
};

// Delete review using the id of the review
const delete_review = async rew_id => {
    query = "DELETE FROM reviews " + "WHERE reviews.rew_id = $1;";
    values = [rew_id];

    error = 1;
    await pool.connect().then(client => {
        return client
            .query(query, values)
            .then(data => {
                client.release();
            })
            .catch(e => {
                client.release();
                console.log("============[ERROR]=============");
                console.log(e.stack);
                error = 0;
            });
    });

    return error;
};

module.exports = {
    get_all_reviews,
    add_new_review,
    delete_review
};
