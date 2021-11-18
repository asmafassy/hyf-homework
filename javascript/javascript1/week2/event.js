//Event application---<>-------<>-------<>-

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getEventWeekday(numberOfDay) {
  // Declare function passing in how many days event will be held
  const d = new Date(); // getting the date (object- inbuilt class)
  let today = d.getDay(); // getting the current day in number
  let eventDay = today + numberOfDay; // in how many days event will be held
  let weekDayindex = eventDay % 7; // =index
  console.log(eventDay);
  console.log(weekDayindex);
  console.log(weekdays[weekDayindex]);
  return weekdays[weekDayindex];
}
console.log(getEventWeekday(18));
