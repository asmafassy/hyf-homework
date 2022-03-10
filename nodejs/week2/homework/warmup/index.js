const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
  // res.send(req.query.)
  const first = req.query.first;
  const second = req.query.second;
  const sum = parseInt(first) + parseInt(second);
  res.send(`Total sum of querys: ${sum}`);
});

app.get('/numbers/multiply/:first/:second', (req,res) => {
    const firstNumber = req.params.first;
    const secondNumber = req.params.second;
    const multiply = firstNumber * secondNumber;
    res.send(`Multiplication of the params ${multiply}`);
})
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
