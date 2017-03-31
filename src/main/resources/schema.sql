/**
 Author: Mrin
 Model : NorthWind
**/

DROP SCHEMA IF EXISTS northwind;

CREATE SCHEMA northwind;
USE northwind;

/* Table: user (Application Users) */
CREATE TABLE user (
    user_id     NVARCHAR(20) NOT NULL,
    password    NVARCHAR(20) NOT NULL,
    first_name  NVARCHAR(50) ,
    last_name   NVARCHAR(50) ,
    email       NVARCHAR(70) ,
    security_provider_id INT ,
    default_customer_id  INT ,
    company     NVARCHAR(50) ,
    phone       NVARCHAR(20) ,
    address1    NVARCHAR(100),
    address2    NVARCHAR(100),
    country     NVARCHAR(20) ,
    postal      NVARCHAR(20) ,
    role        NVARCHAR(20) ,
    other_roles NVARCHAR(80) ,
    is_active   TINYINT  ,
    is_blocked  TINYINT  ,
    secret_question     NVARCHAR(100),
    secret_answer       NVARCHAR(100),
    enable_beta_testing TINYINT,
    enable_renewal      TINYINT,
    CONSTRAINT user_id PRIMARY KEY(user_id)
);

/* Table: customers */
CREATE TABLE customers (
  id              INT NOT NULL,
  last_name       VARCHAR(50) ,
  first_name      VARCHAR(50) ,
  email           VARCHAR(50) ,
  company         VARCHAR(50) ,
  phone           VARCHAR(25) ,
  address1        VARCHAR(150),
  address2        VARCHAR(150),
  city            VARCHAR(50) ,
  state           VARCHAR(50) ,
  postal_code     VARCHAR(15) ,
  country         VARCHAR(50) ,
  PRIMARY KEY (id)
);

/* Table: employees */
CREATE TABLE employees (
  id              INT NOT NULL,
  last_name       VARCHAR(50) ,
  first_name      VARCHAR(50) ,
  email           VARCHAR(50) ,
  avatar          VARCHAR(250) ,
  job_title       VARCHAR(50) ,
  department      VARCHAR(50) ,
  manager_id      INT ,
  phone           VARCHAR(25) ,
  address1        VARCHAR(150),
  address2        VARCHAR(150),
  city            VARCHAR(50) ,
  state           VARCHAR(50) ,
  postal_code     VARCHAR(15) ,
  country         VARCHAR(50) ,
  PRIMARY KEY (id)
);

/* Table: orders */
CREATE TABLE orders (
  id              INT NOT NULL,
  employee_id     INT ,
  customer_id     INT ,
  order_date      DATETIME ,
  shipped_date    DATETIME ,
  ship_name       VARCHAR(50) ,
  ship_address1   VARCHAR(150) ,
  ship_address2   VARCHAR(150) ,
  ship_city       VARCHAR(50) ,
  ship_state      VARCHAR(50) ,
  ship_postal_code VARCHAR(50) ,
  ship_country    VARCHAR(50) ,
  shipping_fee    DECIMAL(19,4) NULL DEFAULT '0.0000',
  payment_type    VARCHAR(50) ,
  paid_date       DATETIME ,
  order_status    VARCHAR(25),
  PRIMARY KEY (id)
);

/* Table: order_details */
CREATE TABLE order_items (
  order_id            INT NOT NULL,
  product_id          INT ,
  quantity            DECIMAL(18,4) NOT NULL DEFAULT '0.0000',
  unit_price          DECIMAL(19,4) NULL DEFAULT '0.0000',
  discount            DECIMAL(19,4) NULL DEFAULT '0.0000',
  order_item_status   VARCHAR(25),
  date_allocated      DATETIME ,
  PRIMARY KEY (order_id, product_id)
);

/* Table: products */
CREATE TABLE products (
  id              INT NOT NULL,
  product_code    VARCHAR(25) ,
  product_name    VARCHAR(50) ,
  description     VARCHAR(250),
  standard_cost   DECIMAL(19,4) NULL DEFAULT '0.0000',
  list_price      DECIMAL(19,4) NOT NULL DEFAULT '0.0000',
  target_level    INT ,
  reorder_level   INT ,
  minimum_reorder_quantity INT ,
  quantity_per_unit VARCHAR(50) ,
  discontinued    TINYINT NOT NULL DEFAULT '0',
  category        VARCHAR(50),
  PRIMARY KEY (id)
);


/* Foreign Key: orders */
ALTER TABLE orders ADD CONSTRAINT fk_orders__customers FOREIGN KEY (customer_id) REFERENCES customers(id);
ALTER TABLE orders ADD CONSTRAINT fk_orders__employees FOREIGN KEY (employee_id) REFERENCES employees(id);
/* Foreign Key:  order_items */
ALTER TABLE order_items ADD CONSTRAINT fk_order_items__orders      FOREIGN KEY (order_id) REFERENCES orders(id);
ALTER TABLE order_items ADD CONSTRAINT fk_order_items__products    FOREIGN KEY (product_id) REFERENCES products(id);

/* Views */
CREATE OR REPLACE VIEW order_info AS
select o.id as order_id
 , o.order_date
 , o.order_status
 , o.paid_date
 , o.payment_type
 , o.shipped_date
 , o.shipping_fee
 , o.ship_name
 , o.ship_address1
 , o.ship_address2
 , o.ship_city
 , o.ship_state
 , o.ship_postal_code
 , o.ship_country
 , o.customer_id
 , o.employee_id
 , concat(c.first_name, ' ', c.last_name) as customer_name
 , c.phone customer_phone
 , c.email customer_email
 , c.company as customer_company
 , concat(e.first_name, ' ', e.last_name) as employee_name
 , e.department employee_department
 , e.job_title  employee_job_title
  From   orders o
       , employees e
       , customers c
 where o.employee_id  = e.id
   and o.customer_id  = c.id;

CREATE OR REPLACE VIEW order_details AS
select oi.order_id
  , oi.product_id
  , oi.quantity
  , oi.unit_price
  , oi.discount
  , oi.date_allocated
  , oi.order_item_status
  , o.order_date
  , o.order_status
  , o.paid_date
  , o.payment_type
  , o.shipped_date
  , o.shipping_fee
  , o.ship_name
  , o.ship_address1
  , o.ship_address2
  , o.ship_city
  , o.ship_state
  , o.ship_postal_code
  , o.ship_country
  , p.product_code
  , p.product_name
  , p.category
  , p.description
  , p.list_price
  , o.customer_id
  , concat(c.first_name, ' ', c.last_name)  as customer_name
  , c.phone   as customer_phone
  , c.email   as customer_email
  , c.company as customer_company
  , o.employee_id
  , concat(e.first_name, ' ', e.last_name) as employee_name
  , e.department as employee_department
  , e.job_title  as employee_job_title
  From   orders o
       , products p
       , order_items oi
       , employees e
       , customers c
 where oi.order_id    = o.id
   and oi.product_id  = p.id
   and o.employee_id  = e.id
   and o.customer_id  = c.id;

CREATE OR REPLACE VIEW customer_orders AS
select o.order_date, o.order_status, o.paid_date, o.payment_type, o.shipping_fee, o.customer_id
       , c.first_name customer_first_name, c.last_name  customer_last_name, c.phone customer_phone, c.email customer_email, c.company
  from orders o,customers c
 where o.customer_id  = c.id;

CREATE OR REPLACE VIEW employee_orders AS
select o.order_date, o.order_status, o.paid_date, o.payment_type, o.shipping_fee, o.employee_id
       , e.first_name employee_first_name, e.last_name  employee_last_name,  e.email employee_email, e.department
  from orders o,employees e
 where o.customer_id  = e.id;
