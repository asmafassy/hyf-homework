
//Q1. Item array removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
 let deletingNameIndex = names.indexOf(nameToRemove);

 names.splice(deletingNameIndex,1);
  console.log(names); 






