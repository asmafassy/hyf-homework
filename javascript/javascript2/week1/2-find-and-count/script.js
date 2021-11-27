const danskLetters = ["æ", "ø", "å"];
const danishString1 = "Jeg har en blå bil";
const danskLetter1 = danskLetters[0];
const danskLetter2 = danskLetters[1];
const danskLetter3 = danskLetters[2];

function countDanskLetters(danishString) {
  let total = 0;

  let totalDanskLetter1 = 0;
  let totalDanskLetter2 = 0;
  let totalDanskLetter3 = 0;

  for (let i = 0; i < danishString.length; i++) {
    let letter = danishString.charAt(i);
    if (danskLetters.includes(letter)) {
      total += 1;
      if (letter === danskLetter1) {
        totalDanskLetter1 += 1;
      } else if (letter === danskLetter2) {
        totalDanskLetter2 += 1;
      } else {
        totalDanskLetter3 += 1;
      }
    }
  }
  let finalOutPut = {
    total: total,
    æ: totalDanskLetter1,
    ø: totalDanskLetter2,
    å: totalDanskLetter3,
  };
  console.log(finalOutPut);
}
countDanskLetters("Blå grød med røde bær");
countDanskLetters("Jeg har en blå bil");

