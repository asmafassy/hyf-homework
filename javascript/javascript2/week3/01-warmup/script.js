//Q1) Log out text...
setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

//Q2) Create function...

function myTest(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay);
}
myTest(5000, "Hello there, this string is called out in 5seconds");
myTest(3000, "This string is called out in 3seconds");

//Q3) Create a button in html....

let hello = function (delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay);
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  hello(
    5000,
    "Hello there, this string is called out in 5seconds after clicking 'CLICK' button"
  );
});

//Q4) Create two functions and assign them to two different variables...

const earthLogger = function () {
  console.log("Earth");
};
const saturnLogger = function () {
  console.log("Saturn");
};

function planetLogFunction(s) {
  s();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//Q5)Create a button with the text called...

function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://maps.google.com/?q=${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);

//Q6) Optional to show the location on map

//Q7)

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay);
}

runAfterDelay(4000, function () {
  console.log("should be logged after 4seconds");
});

// Q8) doubled  clicked  within 0,5 seconds

window.addEventListener("dblclick", (event) => {
  console.log("Double click");
  // Double-click detected
});

//Q9) jokecreater

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

jokeCreator(true, function () {
  console.log(
    "Funny Joke: Did you hear about the mathematician who’s afraid of negative numbers?"
  );
}, function(){console.log("Bad Joke: ")});


jokeCreator(false, function () {
    console.log(
      "Funny Joke: Did you hear about the mathematician who’s afraid of negative numbers?"
    );
  }, function(){console.log("Bad Joke: ")});
  

 