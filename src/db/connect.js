const pg = require("pg");
const config = require("../config/config");

var db_config = {
    user: config.db_user,
    password: config.db_password,
    database: config.db
};

const pool = new pg.Pool(db_config);

module.exports = {
    pool
};
