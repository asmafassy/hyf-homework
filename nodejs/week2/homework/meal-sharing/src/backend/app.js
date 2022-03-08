const express = require("express");
const app = express();

const mealsRouter = require("./api/meals-router");
app.use("/api/meals", mealsRouter);

const meals = require("./data/meals.json");
const reservations = require("./data/reservations.json");

const reservationsRouter = require("./api/reservations-router");
app.use("/api/reservations", reservationsRouter);

const reviewsRouter = require("./api/reviews-router");
const reviews = require("./data/reviews.json");
app.use("/api/reviews", reviewsRouter);

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
mealsRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  const filteredMeal = meals.filter((meal) => meal.id === parseInt(id));
  res.send(filteredMeal);
});

//Respond with the json for all the meals
// mealsRouter.get("/", (req, res) => {
//   res.send(meals);
// });

//Respond with the json for the reservation with the corresponding id *
reservationsRouter.get("/:id", (req, res) => {
  const filteredReservation = reservations.filter(
    (reservation) => reservation.id === parseInt(req.params.id)
  );
  res.send(filteredReservation);
});

//Respond with the json for all reservations *
reservationsRouter.get("/", (req, res) => {
  res.send(reservations);
});

// Respond with the json for the review with the corresponding id *
reviewsRouter.get("/:id", (req, res) => {
  const filteredreview = reviews.filter(
    (review) => review.id === parseInt(req.params.id)
  );
  res.send(filteredreview);
});

// Respond with the json for all reviews *
reviewsRouter.get("/", (req, res) => {
  res.send(reviews);
});

//Get meals that has a price smaller than maxPrice
mealsRouter.get("/", (req, res) => {
  let data = meals;
  console.log("String for testing");
console.log(req.query);

  if ("maxPrice" in req.query) {
    const maxPrice = Number(req.query.maxPrice);
    data = data.filter((meal) => meal.price <= maxPrice);
    console.log(`data : ${data}`);
    console.log(`max price  : ${maxPrice}`);
  }
  
  if("title" in req.query){
      const title = req.query.title;
      data = data.filter(meal => meal.title.match(title))
  }
  if("createdAfter" in req.query){
      const createdAfter = req.query.createdAfter;
      data = data.filter(meal => meal.createdAt <= createdAfter);
  }


  res.send(data);
});

module.exports = app;
