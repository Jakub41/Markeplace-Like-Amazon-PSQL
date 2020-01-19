# Marketplace API like Amazon PSQL

## Structure of the project

```
📦src
 ┣ 📂config
 ┃ ┗ 📜config.js
 ┣ 📂db
 ┃ ┣ 📜connect.js
 ┃ ┗ 📜tables.sql
 ┣ 📂helpers
 ┃ ┗ 📜helper.js
 ┣ 📂middlewares
 ┃ ┣ 📜index.middleware.js
 ┃ ┣ 📜isExist.js
 ┃ ┣ 📜isInt.js
 ┃ ┣ 📜uuidValidator.js
 ┃ ┣ 📜validatorRules.middleware.js
 ┃ ┗ 📜validators.middleware.js
 ┣ 📂models
 ┃ ┣ 📜cart.js
 ┃ ┣ 📜product.js
 ┃ ┗ 📜review.js
 ┣ 📂routes
 ┃ ┣ 📂cart
 ┃ ┃ ┗ 📜cart.route.js
 ┃ ┣ 📂products
 ┃ ┃ ┗ 📜products.route.js
 ┃ ┣ 📂reviews
 ┃ ┃ ┗ 📜reviews.routes.js
 ┃ ┗ 📜index.routes.js
 📜.server.js
```

## Description
* I have added extra table called cart_products to map products in a cart
* Project is well structured
* Added new model called cart
* Removed unwanted functionalities from the entire code base.
* I created some async/await features to avoid some obstacles.
* SQL injection protected since we are using pg features for dynamic options.
* implemented new database output format for the models you can see it at `helper.db_output_format()`
