//Flight booking fullname function---<>----

function getFullname(firstname, surname, useFormalName, gender) {
  let fullName = firstname + " " + surname;

  if (firstname == "" || surname == "") {
    return "first name or last name can not be empty";
  } else if (useFormalName === true) {
    if (gender === "male") {
      return "Lord " + fullName;
    } else if (gender === "female") {
      return "Lady " + fullName;
    }
  }

  return fullName;
}

let fullName1 = getFullname("Asma", "Fassy", true, "female");
let fullName2 = getFullname("Mujahid", "Mohamed",true, "male");

console.log(fullName1);
console.log(fullName2);
