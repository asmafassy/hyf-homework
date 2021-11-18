//Weather wear---<>-------<>-------<>------

const clothesToWear = getClothesToWear(-5);
function getClothesToWear(temperature) {
let clothes = "";
  if (  temperature <= 5) {
clothes = 'winter Jacket' + 'cap' ;
  } else if(temperature > 5 && temperature <= 15){
    clothes = 'wind breaker';
  } else if(temperature > 15 && temperature < 24 ){
      clothes = 'basics'
  } else{
    clothes = 'anything as you want '
  } 
 
  console.log(clothes);
  return clothes;
}