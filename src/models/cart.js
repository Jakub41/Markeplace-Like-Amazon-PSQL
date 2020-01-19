// We import the helpers as we need to interact with our data
const helper = require("../helpers/helper");
const { pool } = require("../db/connect");
const mdl_product = require("./product");

// Get one cart for the given cart id
const get_one_cart = async cart_id => {
    cart = helper.db_output_format();

    sql_ = "SELECT * FROM cart WHERE cart_id = $1";
    sql_values = [cart_id];

    await pool.connect().then(client => {
        return client
            .query(sql_, sql_values)
            .then(data => {
                client.release();
                if (data.rows.length > 0) {
                    cart.data = data.rows;
                    cart.length = data.rows.length;
                }
            })
            .catch(e => {
                client.release();
                console.log("============[ERROR]=============");
                console.log(e);
                cart.error_message = "Error fetching data from the database";
            });
    });

    return cart;
};

const add_new_cart = async () => {
    cart_id = helper.getNewId();
    query = "INSERT INTO cart(cart_id, created_at) " + "VALUES($1, $2);";
    values = [cart_id, helper.newDate()];

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

    if (error) {
        return cart_id;
    } else {
        return null;
    }
};

// Add the given product to the shopping cart
const add_product = async (cart_id, product_id, qty) => {
    product = await mdl_product.getOneProduct(product_id);
    cart = await get_one_cart(cart_id);

    query =
        "INSERT INTO cart_products(product_id, cart_id, product_qty, modified_at) " +
        "VALUES($1, $2, $3, $4);";
    values = [product.data[0]._id, cart.data[0]._id, qty, helper.newDate()];

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

// Exporting the modules
module.exports = {
    add_new_cart,
    add_product,
    get_one_cart
};
