const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  getMealsWithReviews();
  response.send(meals);
});

app.get("/cheap-meals", async (request, response) => {
  response.send(getCheapMeals());
});

app.get("/large-meals", async (request, response) => {
  response.send(getLargeMeals());
});

app.get("/meal", async (request, response) => {
  response.send(getRandomMeals());
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(getRandomReservations());
});

function getMealsWithReviews() {
  return meals.map((meal) => {
    // find the single meal {}
    meal.reviews = []; // creating an array inside meals to include review +s
    reviews.map((review) => {
      // loop over and get each review
      if (review.mealId === meal.id) {
        // If the id in the review = MEAL ID
        meal.reviews.push(review); // then push to the Array
      }
    });
  });
}
// Cheap meals
const getCheapMeals = () => {
  getMealsWithReviews();

  return meals.filter((meal) => {
    return meal.price < 100;
  });
};

// Large Meals
const getLargeMeals = () => {
  getMealsWithReviews();

  return meals.filter((meal) => {
    return meal.maxNumberOfGuests > 2;
  });
};

// Random Meal
const getRandomMeals = () => {
  getMealsWithReviews();
  const randomIndex = Math.floor(Math.random() * meals.length);
  console.log("Random Index :" + randomIndex);
  console.log("Random Meal :" + meals[randomIndex]);
  return meals[randomIndex];
};

// Random Reservations
const getRandomReservations = () => {
  const randomIndexReservation = Math.floor(
    Math.random() * reservations.length
  );
  console.log("Random Index for reservations :" + randomIndexReservation);
  console.log("Random reservations : " + reservations[randomIndexReservation]);
  return reservations[randomIndexReservation];
};

module.exports = app;
