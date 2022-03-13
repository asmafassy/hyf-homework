const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/:calc", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  const queries = req.query;

  const queryValues = Object.values(queries);
  const arrayNumbers = queryValues.map((i) => Number(i));
  console.log(arrayNumbers);
  let outPut;

  //   array.reduce((previosValue, currentValue) => {
  //     return previosValue + currentValue;
  //   }, initialValue);

  //   array.reduce(callback, inital);
  if (req.params.calc === "multiply") {
    outPut = multi(arrayNumbers);
  }
  res.send(`output ${outPut}`);
});

function multi(arrayNumbers) {
  return arrayNumbers.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
  }, 1);
}

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
