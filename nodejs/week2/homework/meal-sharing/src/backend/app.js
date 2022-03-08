const express = require("express");
const app = express();

const meals = require("./data/meals.json");

const mealsRouter = require("./api/meals-router");

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/api/meals", mealsRouter);

mealsRouter.get('/:id', (req, res) => {
const id = req.params.id
const mealid = meals.filter(meal => {
    meals.id;
    if (meals.id === req.params.id )
    res.send(meals);
    // console.log(meals);
})
 
})


module.exports = app;
