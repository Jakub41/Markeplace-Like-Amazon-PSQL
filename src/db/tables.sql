CREATE TABLE product
(
    _id integer NOT NULL,
    name character varying(35),
    description character varying(50),
    brand character varying(40),
    image_url character varying(500),
    price numeric,
    category character varying(20),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    product_id character varying(80),
    CONSTRAINT product_pkey PRIMARY KEY (_id)
)

/* ================================================= */
CREATE TABLE reviews
(
    _id integer NOT NULL,
    comment character varying(100),
    rate integer,
    product_id2 character varying(80),
    created_at timestamp without time zone,
    product_id integer,
    CONSTRAINT reviews_pkey PRIMARY KEY (_id)
)


/* ================================================= */
CREATE TABLE cart_products
(
    _id integer NOT NULL,
    product_id integer,
    cart_id integer,
    product_qty numeric,
    modified_at timestamp without time zone,
    CONSTRAINT cart_products_pkey PRIMARY KEY (_id)
)

/* ================================================= */
CREATE TABLE cart
(
    _id integer NOT NULL,
    cart_id character varying(80),
    created_at timestamp without time zone,
    CONSTRAINT cart_old_pkey PRIMARY KEY (_id)
)
