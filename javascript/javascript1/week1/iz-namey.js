//Ez Namey------()---(Startup-name-generator)------()-----
const firstWords = ["Easy","Awesome","Cool","Fantabulous","Excellent","Friendly","outstanding","Quality","Original"];
const secondWords = ["Corporation","Company","Institute","Organization","Firm","School","Univercity","Online-sore","Shopping-Center","Store-Center"];
console.log(firstWords[1]);
console.log(secondWords.length);

let startUpName; 
const randomNumber = Math.floor(Math.random()*10);
const randomNumber1 = Math.floor(Math.random()*10);
console.log(randomNumber, randomNumber1);

let startupName = firstWords[randomNumber]  +" "+  secondWords[randomNumber1];
console.log("The startup:" + startupName + " contains "  + startupName.length + " characters");
document.getElementById("iz-namey").innerHTML = "04> The startup:" + startupName + " contains "  + startupName.length + " characters";