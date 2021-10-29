
// GOODBOY - OLDBOY-------()------- A DOG AGE CALCULATOR--------()---------

const dogYearFuture = 2027;
const dogYear = 70;
const dogYearOfBirth = dogYearFuture - dogYear;
// console.log(`Dog's YOB is going to be ${dogYearOfBirth}. in "woof woof" years`)

const humanYearFuture = 2027;
const humanYear = 10;
const humanYearOfBirth = humanYearFuture - humanYear;
//console.log(`Dog's YOB is going to be  ${humanYearOfBirth}. in "human" years`)

let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears){
    console.log("Your dog will be " + dogYear + " dog year\'s old in the year " + dogYearFuture);
    document.getElementById("good-oldboy").innerHTML = "02> Your dog will be " + dogYear + " dog year\'s old in the year " + dogYearFuture;
} else{
    console.log("Your dog will be " + humanYear + "human year\'s old in the year " + dogYearFuture)
    document.getElementById("good-oldboy").innerHTML = "02> Your dog will be " + humanYear + "human year\'s old in the year " + dogYearFuture;

}