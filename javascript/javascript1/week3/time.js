//Q2) When will we be there??

  const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function getTravelTime() {
 let formula = travelInformation.destinationDistance / travelInformation.speed;

let n = new Date(0, 0);
let timeInSeconds = n.setSeconds(+formula * 60 * 60);
console.log(timeInSeconds);
console.log(n.toTimeString());
let time = n.toTimeString();
let timeArray = time.split(":");
console.log(timeArray);

return timeArray[0] + " hours and " + timeArray[1] + " minutes.";

}

console.log(getTravelTime());




