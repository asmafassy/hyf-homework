// Create an array with 3items...

const fnArr = [
  function () {
    console.log("first item");
  },
  function () {
    console.log("second item");
  },
  function () {
    console.log("third item");
  },
];
fnArr.map((fn) => fn());

//Create a function as a const...
secondFn();


const firstFn = function () {
  console.log("first function");
};
firstFn();

function secondFn() {
  console.log("second function");
}


//Create an object...

    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      };
console.log(person.fullName())