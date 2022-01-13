// Create a function called getReply(command)
const name = [];
const toDo = [];
function getReply(command) {
  const lowerCase = command.toLowerCase();
  let words = command.split(" ");
  let yourName = words[words.length - 1];
  if (lowerCase.includes("my name is")) {
    name.push(yourName);

    console.log(`Nice to meet you ${name}`);
  }
  if (lowerCase.includes("what is my name")) {
    console.log("Your name is " + name[0]);
  }
  if (lowerCase.includes("add fishing to my todo")) {
    toDo.push("fishing");
    console.log("fishing added to your todo");
  }
  if (lowerCase.includes("singing in the shower")) {
    toDo.push("singing in the shower");
    console.log("singing in the shower to my todo");
  }
  if (lowerCase.includes("remove fishing from my todo")) {
    toDo.shift("fishing");
    console.log("remove fishing from your toDo");
  }
  if (lowerCase.includes("what is on my todo")) {
    console.log(`you have ${toDo.length} todos - ${toDo}`)
  }
  if(lowerCase.includes("what day is it today")){
    const monthsOfYear = ["January","February", "March", "April", "May", "June", "July", "August","September","October", "November", "December"]
    let date = new Date();
    let day= date.getDate();
    let month= date.getMonth();
    let year= date.getFullYear();
    console.log(`${day}th.of ${monthsOfYear[month]} ${year}`);
  }
  if(lowerCase.includes("+")){
    const x = lowerCase.split(' ');
    const numbers = x.filter(n => Number(n));
    const answer=numbers.reduce((a,b) =>Number(a) + Number(b)
    ,0);
    console.log(answer);
  }
  if(lowerCase.includes("set a timer for 4 minutes")){
    const x = lowerCase.split(' ');
    console.log(x);
    const numbers = x.filter(n => Number(n));
    setTimeout(function(){console.log(`Timer done!`)},+numbers * 60000)
    console.log(+numbers);
  }
  if(lowerCase.includes("*")){
    const x = lowerCase.split(' ');
    const numbers = x.filter(n => Number(n));
    const answer=numbers.reduce((a,b) =>Number(a) * Number(b)
    ,);
    console.log(answer);
  }
}
getReply("Hello my name is Asma");
getReply("What is my name");
getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");
getReply("Remove fishing from my todo");
getReply("What is on my todo?");
getReply("what day is it today");
getReply("what is 6 + 3");
getReply("set a timer for 10 minutes");
getReply("what is 6 * 3");