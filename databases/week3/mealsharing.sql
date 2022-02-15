CREATE DATABASE mealsharing DEFAULT CHARACTER SET = 'utf8mb4';
use mealsharing;
CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` VARCHAR(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` int(10) unsigned NOT NULL,
  `price` DECIMAL(19, 4) NOT NULL,
  `created_date` DATE NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(10) UNSIGNED NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATE NOT NULL,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  CONSTRAINT `fk_reservation_meal` FOREIGN KEY(`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE Table `review`(
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `meal_id` int(10) UNSIGNED NOT NULL,
  `stars` int(10) unsigned NOT NULL,
  `created_date` DATE NOT NULL,
  CONSTRAINT `fk_review_meal` FOREIGN KEY(`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
-- Meal
--get all meal
SELECT
  *
FROM
  meal;
--Add a new meal
insert into
  meal (
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
values
  (
    1,
    'Dedang rendang',
    'A malysian side dish which gives a sweet and sour taste to the beef curry, caution: you may get addicted to eating this!',
    'Ampang Hilir, Malaysia',
    "2021-10-06 19:39:16",
    5,
    650.75,
    "2022-03-03"
  );
-- get a meal with any id
SELECT
  *
FROM
  meal
WHERE
  meal.id = 1;
-- update a meal
UPDATE
  meal
SET
  description = 'A malaysian side dish'
WHERE
  id = 1;
--Delete a meal with any id, fx 1
DELETE FROM
  meal
WHERE
  id = 1;
--RESERVATIONS
  --Get all reservations
SELECT
  *
FROM
  reservation;
--Add a new reservation
insert into
  reservation (
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
values
  (
    1,
    5,
    1,
    '2022-01-01',
    '45628924',
    'Noor alAin',
    'noor@cupcake.com'
  );
--Get a reservation with any id, fx 1
SELECT
  *
FROM
  reservation
WHERE
  id = 1;
--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  reservation
SET
  id = 2,
  contact_name = 'Noor Al-Ain'
Where
  id = 1;
--Delete a reservation with any id, fx 1
DELETE FROM
  reservation
WHERE
  id = 1;
--REVIEW
  --Get all reviews
SELECT
  *
FROM
  review;
--Add a new review
UPDATE
  review
SET
  id = 1,
  description = 'Added sweetness is too much'
WHERE
  id = 1;
--Get a review with any id, fx 1
SELECT
  *
FROM
  reservation
WHERE
  id = 1;
--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  review
SET
  id = 1,
  created_date = "2022-03-03";
--Delete a review with any id, fx 1
DELETE FROM
  reservation
WHERE
  id = 1;
--ADDITIONAL QUERIES
  --Meals
insert into
  meal (
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
values
  (
    2,
    'Paratha',
    'Indian Bread',
    'Nørrebrogade 46, 2200 København',
    "2022-10-05 15:39:16",
    3,
    550.00,
    "2022-02-13"
  );
insert into
  meal (
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
values
  (
    3,
    'Classic pizzetta',
    'Home made italian & Mediterranean classic Pizza',
    ' Bisiddervej 16, 2400 København',
    "2022-02-09 08:39:16",
    1,
    75.75,
    "2022-02-09"
  );
insert into
  meal (
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
values
  (
    4,
    'Shawarma',
    'Freshly made bread with grilled meat',
    'Sultan Shawarma Nørrebrogade 72A, 2200 København',
    "2021-10-06 19:39:16",
    8,
    950.75,
    "2022-03-03"
  );
insert into
  meal (
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
values
  (
    5,
    'Mezza Plates',
    '2 Mezza, blend with salad og 2stk Bakery',
    'Liban Cuisine Rantzausgade 1, 2200 København',
    "2022-05-14 19:39:16",
    2,
    82.00,
    "2022-03-03"
  );
insert into
  meal (
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
values
  (
    6,
    'XXX- Large Tallerken (8personer)',
    '3 kebab, 2 tawouk, 2 lam, 1 kylingevingor, Frugt og dessert, and many more',
    'Caracalla Café og restaurant Frederikssundsvej 121H, 2700 København',
    "2021-10-06 19:39:16",
    5,
    1499.75,
    "2022-02-01"
  );
insert into
  meal (
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
values
  (
    7,
    'Rød grød med fløde',
    'Traditionel dansk rødbærbudding',
    'Nyboders Køkken Borgergade 134, 1300 København',
    "2021-10-06 19:39:16",
    2,
    89.00,
    "2022-03-03"
  );
insert into
  meal (
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
values
  (
    8,
    'Grilled Burger',
    'Freshly made burgers for your taste buds',
    'Grillen Burgerbar Vesterbrogade 41, 1620 København',
    "2022-03-25 10:39:16",
    8,
    720.00,
    "2022-02-14"
  );
SELECT
  *
FROM
  meal;
--Reservation
insert into
  reservation (
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
values
  (
    1,
    5,
    1,
    "2022-03-03",
    '45628924',
    'Noor alAin',
    'noor@cupcake.com'
  );
insert into
  reservation (
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
values
  (
    2,
    3,
    2,
    "2022-02-13",
    '96488924',
    'Baba Ganesh',
    'rudeBabu@hotmail.com'
  );
insert into
  reservation (
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
values
  (
    3,
    1,
    3,
    '2022-02-15',
    "2022-02-09",
    'Giuseppe Flavio ',
    'flavio5610@yahoo.com'
  );
insert into
  reservation (
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
values
  (
    4,
    3,
    4,
    "2022-03-03",
    '96456924',
    'Muzammil Khan',
    'khan@hotmail.com'
  );
insert into
  reservation (
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
values
  (
    5,
    3,
    5,
    "2022-03-03",
    '34898524',
    'نسبة البغدادي ',
    'beautifulnaseee@gmail.com'
  );
insert into
  reservation (
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
values
  (
    6,
    5,
    6,
    "2022-02-01",
    '456988924',
    'ابن خلدون',
    'khald0009@hotmail.com'
  );
insert into
  reservation (
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
values
  (
    7,
    2,
    7,
    "2022-03-03",
    '648988924',
    'René Rasmussen',
    'rren@hotmail.com'
  );
insert into
  reservation (
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`
  )
values
  (
    8,
    8,
    8,
    "2022-02-14",
    '388988924',
    'Genella Pinto',
    'gnlpto@hotmail.com'
  );
-- REVIEW
insert into
  review (
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
values
  (
    1,
    'Dedang rendang',
    "Its one of the best side dishes I tried in Malaysia",
    1,
    7,
    "2022-03-03"
  );
insert into
  review (
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
values
  (
    2,
    'Paratha',
    'A freshly made Paratha which made us feel as we are back HOME, Rating it 5 cause it felt as dunked in oil',
    2,
    5,
    "2022-02-13"
  );
insert into
  review (
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
values
  (
    3,
    'Classic pizzetta',
    'Home made italian & Mediterranean classic Pizza, it sound as it is described',
    3,
    8,
    "2022-02-09"
  );
insert into
  review (
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
values
  (
    4,
    'Shawarma',
    'Love the smell and the presentation of the food, for sure will visit again',
    4,
    9,
    "2022-03-03"
  );
insert into
  review (
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
values
  (
    5,
    'Mezza Plates',
    'Though the portion was comperatively smaller than expected it did taste super good',
    5,
    8,
    "2022-03-03"
  );
insert into
  review (
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
values
  (
    6,
    'XXX- Large Tallerken (8personer)',
    'It was a great service at the restaurant, but the sorrounding was bit noisy',
    6,
    9,
    "2022-02-01"
  );
insert into
  review (
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
  )
values
  (
    7,
    'Rød grød med fløde',
    "Det smager det samme som min mor laver",
    7,
    9,
    "2022-03-03"
  );
SELECT
  *
FROM
  review;
--Get meals that has a price smaller than a specific price fx 90
SELECT
  *
FROM
  meal
WHERE
  price < 90;
--Get meals that still has available reservations
SELECT
  *
FROM
  meal
  JOIN reservation ON meal.id = reservation.meal_id
WHERE
  reservation.id = NULL;
--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT
  *
FROM
  meal
WHERE
  title LIKE 'Rød grød med%';
--Get meals that has been created between two dates
SELECT
  *
FROM
  meal
WHERE
  created_date >= '2022-02-01'
  AND created_date <= '2022-03-15';
--Get only specific number of meals fx return only 5 meals
SELECT
  *
FROM
  meal
LIMIT
  2, 4;
--Get the meals that have good reviews
SELECT
  *
FROM
  meal
  JOIN review ON meal.id = review.meal_id
WHERE
  review.stars >= 7;
--Get reservations for a specific meal sorted by created_date
SELECT
  *
FROM
  reservation
  JOIN meal ON meal.id = reservation.meal_id
WHERE
  reservation.created_date = "2022-03-03";
--Sort all meals by average number of stars in the reviews
SELECT
  meal.title,
  avg(stars) AS avg_stars
FROM
  review
  JOIN meal ON meal.id = review.meal_id
GROUP BY
  meal.title
ORDER BY
  avg_stars;
SELECT
  *
from
  review;