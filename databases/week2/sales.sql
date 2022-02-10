
--Part 4: Creating a database
-- Sales DATABASE
CREATE DATABASE sales;
USE sales;
CREATE TABLE `customer`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
DESCRIBE customer;
CREATE TABLE `product` (
  `product_name` varchar(255) NOT NULL,
  `quantity` INT NOT NULL,
  `total_price` INT NOT NULL,
  `created` DATETIME NOT NULL,
  `updated` DATETIME NOT NULL,
  `due_date` DATETIME NULL DEFAULT NULL,
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
ALTER TABLE
  product
ADD
  CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
ALTER TABLE
  product
ADD
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE
  product
ADD
  `price` INT NOT NULL;
SELECT
  *
FROM
  product;
DESCRIBE sales;
CREATE TABLE `status` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `customer_order`(
    `customer_id` int(10) unsigned NOT NULL,
    `product_id` int(10) unsigned NOT NULL,
    `status_id` int(10) unsigned NOT NULL,
    CONSTRAINT `fk_customer_order_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_customer_order_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--Customers
insert into
  customer (id, name, email, address, phone)
VALUES
  (
    1,
    'Asma Fassy',
    'asmafassy@gmail.com',
    'KrogshØvej 2B, 4th Bagsværed',
    '52812389'
  );
insert into
  customer (id, name, email, address, phone)
VALUES
  (
    2,
    'Benjamin Franklin',
    'benjamin2456@gmail.com',
    'Fuglegårdsvænget 63, 2820 Gentofte',
    '40409547'
  );
insert into
  customer (id, name, email, address, phone)
VALUES
  (
    3,
    'Jette Philpsen',
    'jette@gmail.com',
    '115, Jagtvej 113, 2200 København N',
    '40404567'
  );
insert into
  customer (id, name, email, address, phone)
VALUES
  (
    4,
    'Anndrea Harald',
    'andreacool@gmail.com',
    'Forchhammersvej 13, 1. sal tv, 1920 Frederiksberg C',
    '70409467'
  );
insert into
  customer (id, name, email, address, phone)
VALUES
  (
    5,
    'Hanne Karsten',
    'hkn@gmail.com',
    'Forchhammersvej 13, 1. sal tv, 1920 Frederiksberg C',
    '10409367'
  );
insert into
  customer (id, name, email, address, phone)
VALUES
  (
    7,
    'Ellinor Henrik',
    'elli79@gmail.com',
    'Vestvej 35, 3230 Græsted',
    '98509467'
  );
insert into
  customer (id, name, email, address, phone)
VALUES
  (
    8,
    'Diana Frederikte',
    'dianafrederike@gmail.com',
    'Forchhammersvej 13, 1. sal tv, 1920 Frederiksberg C',
    '70409467'
  );
insert into
  customer (id, name, email, address, phone)
VALUES
  (
    9,
    'Elisabeth Benedicte',
    'dtr_of_benedicte@gmail.com',
    'Forchhammersvej 13, 1. sal tv, 1920 Frederiksberg C',
    '70409467'
  );
insert into
  customer (id, name, email, address, phone)
VALUES
  (
    10,
    'Bjarke Daniel',
    'fallen_from_heaven@gmail.com',
    'Forchhammersvej 13, 1. sal tv, 1920 Frederiksberg C',
    '70409467'
  );
ALTER customer (id, name, email, address, phone)
VALUES
  (
    6,
    'Donni Daniel',
    'fallen_from_heaven@gmail.com',
    'Forchhammersvej 13, 1. sal tv, 1920 Frederiksberg C',
    '70409467'
  );
SELECT
  *
FROM
  customer;
--Statuses
insert into
  status (id, name)
values
  (1, 'Shipping soon');
insert into
  status (id, name)
values
  (2, 'Shipped');
insert into
  status (id, name)
values
  (3, 'On the way');
insert into
  status (id, name)
values
  (4, 'Out  for delivery');
insert into
  status (id, name)
values
  (5, 'Delivered');
SELECT
  *
FROM
  status;
--Products
insert into
  product(
    id,
    product_name,
    quantity,
    price,
    total_price,
    created,
    updated,
    due_date
  )
values
  (
    1,
    'PRDKT5689',
    2,
    65,
    0,
    '2022-01-05 03:06:46',
    '2022-01-05 06:14:31',
    '2022-02-22 20:58:03'
  );
insert into
  product(
    id,
    product_name,
    quantity,
    price,
    created,
    updated,
    due_date
  )
values
  (
    2,
    'asdKT5689',
    5,
    60,
    '2021-03-04 04:02:26',
    '2021-03-05 06:14:31',
    '2021-04-22 20:58:03'
  );
SELECT
  *
FROM
  product;
-- Customer_order
insert into
  customer_order (customer_id, product_id, status_id)
values
  (1, 2, 4);
insert into
  customer_order (customer_id, product_id, status_id)
values
  (2, 2, 4);
insert into
  customer_order (customer_id, product_id, status_id)
values
  (10, 2, 1);
insert into
  customer_order (customer_id, product_id, status_id)
values
  (7, 1, 3);