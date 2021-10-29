// HOUSEY-PRICEY-------()------ (A HOUSE PRICE ESTIMATOR)--------()------------

//Peters
const houseCostPeter = 2500000;
const volumeInMetersP = 8 * 10 * 10;
const gardenSizeM2P = 100;
const housePricePeter = volumeInMetersP * 2.5 * 1000 + gardenSizeM2P * 300;
//console.log("Amount he is suppose to pay " + housePricePeter + ".")
const costDiffPeter = houseCostPeter - housePricePeter;
//console.log("Peter's cost difference is " + costDiffPeter);
if (houseCostPeter === housePricePeter) {
  console.log("Peter would pay the exact amount " + costDiffPeter + ".");
  document.getElementById("Peter").innerHTML =
  "03> Peter would pay the exact amount " + costDiffPeter + ".";
} else if (houseCostPeter < housePricePeter) {
  console.log("Peter would save " + costDiffPeter + ".");
  document.getElementById("Peter").innerHTML =
  "03> Peter would save " + costDiffPeter + ".";
} else {
  console.log("Peter would pay extra " + costDiffPeter + ".");
  document.getElementById("Peter").innerHTML =
  "03> Peter would pay extra " + costDiffPeter + ".";
}

//Julia
const houseCostJulia = 1000000;
const volumeInMetersJ = 5 * 11 * 8;
const gardenSizeM2J = 70;
const housePriceJulia = volumeInMetersJ * 2.5 * 1000 + gardenSizeM2J * 300;
//console.log("Amount Julia suppose to pay " + housePriceJulia + ".")
const costDiffJulia = houseCostJulia - housePriceJulia;
//console.log("Julia's cost difference is " + costDiffJulia);
if (houseCostJulia === housePriceJulia) {
  console.log("Julia is paying the exact amount" + costDiffJulia + ".");
  document.getElementById("Julia").innerHTML =
    "Julia is paying the exact amount" + costDiffJulia + ".";
} else if (houseCostJulia < housePriceJulia) {
  console.log("Julia would save" + costDiffJulia + ".");
  document.getElementById("Julia").innerHTML =
    "Julia would save" + costDiffJulia + ".";
} else {
  console.log("Julia would pay extra" + costDiffJulia + ".");
  document.getElementById("Julia").innerHTML =
    "Julia would pay extra" + costDiffJulia + ".";
}
