//Q1) short title--------------------------------
const shortTitledMovies = movies.filter((movie) => movie.title.length < 5);
console.log(shortTitledMovies.length);

// Q2) long movie titles---------------------------
const longMovieTitles = movies.filter((movie) => movie.title.length > 5);
// console.log(`movies with long titles ${JSON.stringify(longMovieTitles)}`);

// Q3)made between 1980-1989-------------------------------

let number = 0;
const moviesMade = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
// console.log(`made between 1980-1989 ${JSON.stringify(moviesMade)}`);

//Q4) extra key called tag---------------------------------------
const tag = movies.map(function (movie) {
  if (movie.rating >= 7) {
    movie.tag = "Good";
  } else if (movie.rating < 7 && movie.rating >= 4) {
    movie.tag = "Average";
  } else if (movie.rating < 4) {
    movie.tag = "Bad";
  }
  return movie;
});
// console.log(`extra key called tag ${JSON.stringify(tag)}`);

//Q5)t filter the movies array-------------------------------
// movies.filter((movie) => movie.rating > 6).map((movie) => console.log(movie));

//Q6) movies containing any of following keywords--------------
const keyWords = ["Surfer", "Alien", "Benjamin"];

let filteredMovies = [];
movies.map((movie) => {
  const titleArr = movie.title.split(" ");
  const isExist = titleArr.filter((title) => keyWords.includes(title));
  if (isExist.length > 0) {
    filteredMovies.push(movie);
  }
});
console.log(`Filtered movies ${JSON.stringify(filteredMovies.length)}`);

//Q7)  Create an array of movies
function getRepeatedTitleMovies() {
  let repeatedTitleMovies = [];
  movies.map((movie) => {
    // console.log(countRepeatedWords(movie.title));
    let repeatingWords = countRepeatedWords(movie.title);
    //  console.log(Object.values(repeatingWords))
    let wordCountsArray = Object.values(repeatingWords);
    let wordCountSum = wordCountsArray.reduce((a, b) => a + b, 0);
    if (wordCountSum > wordCountsArray.length) {
      repeatedTitleMovies.push(movie.title);
    }
  });
  console.log(`Repeated words in the movie title : \n ${repeatedTitleMovies}`);
}
getRepeatedTitleMovies();

function countRepeatedWords(sentence) {
  let words = sentence.split(" ");
  let wordMap = {};

  for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
  }
  return wordMap;
}

//Q8) Calculate the average rating of all the movies using reduce. Optional

function sumOfRatings() {
  let sumOfRatings = movies.reduce((a, b) => {
    return a + b.rating;
  }, 0);
  console.log(sumOfRatings);
  let totalNoOfMovies = movies.length;
  let average = sumOfRatings / totalNoOfMovies;
  console.log(Math.round(average));
}
sumOfRatings();


// Q9) Count the total number of Good, Average and Bad movies 
function getTotalOfMVRatingCategories() { // a= initial value b=Movie object
  let ratingCategories = movies.reduce(
    (a, b) => {
      if (b.rating >= 7) {
        a.goodMovies += 1;
      } else if (b.rating >= 4 && b.rating < 7) {
        a.averageMovies += 1;
      } else if (b.rating < 4) {
        a.badMovies += 1;
      }
      return a;
    },
    { goodMovies: 0, averageMovies: 0, badMovies: 0 }
  );
  console.log(ratingCategories);
}
getTotalOfMVRatingCategories();
