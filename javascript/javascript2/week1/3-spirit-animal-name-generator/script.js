// Markup time!


let spiritAnimals = ["The crying butterfly", "The ghosty ghost", "The human hunter", "The goosy gheese", "The moosy moose", "The funky villain", "The wiggly jelly", "The plump pudding", "The flabby beast", "The chatterbox "  ]
function randomNumber(){
  return Math.floor(Math.random() *spiritAnimals.length);
}

function myFunction() {

  let index = randomNumber();
  console.log("index = ", index);
 
  let userName = document.getElementById('inPut').value;
  if (userName === ""){
    alert("Please enter a valid name");
    return;
  }
  document.getElementById("outPut").innerHTML = userName + '- ' + spiritAnimals[index] + '.';

}



