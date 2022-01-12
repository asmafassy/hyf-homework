var danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];



function getShortWord(){
  return danishWords
  .reduce(function(a, b) {
    console.log(a, b);
    console.log(a.length, b.length);
      return  a.length <= b.length ? a : b;
    })
}


console.log(getShortWord());


