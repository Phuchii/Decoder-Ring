function getAlphabetArray() {
  let allLetters = [];
  let ascii = 97;
  let count = 0;
  while (count < 26) {
    allLetters.push(String.fromCharCode(ascii));
    ascii++;
    count++;
  }
  return allLetters;
}

function test(input, shift = 0, encode = true) {
  if (shift < -25 || shift > 25 || shift === 0) return false;
  if (!encode) shift *= -1;
  let alphabet = getAlphabetArray();
  let arrayInput = input.toLowerCase().split(" ");
  //console.log(arrayInput);
  for (let i = 0; i < arrayInput.length; i++) {
    let cypherWord = "";
    //console.log(arrayInput[i]);
    for (let j = 0; j < arrayInput[i].length; j++) {
      if (!alphabet.includes(arrayInput[i][j])) {
        cypherWord += arrayInput[i][j];
        break;
      }
      let cypherLetter = ((arrayInput[i].charCodeAt(j) % 97) + shift) % 26;
      //console.log(cypherLetter);
      if (cypherLetter < 0) cypherLetter = alphabet.length + cypherLetter;
      //console.log(cypherLetter);
      cypherWord += alphabet[cypherLetter];
    }
    arrayInput[i] = cypherWord;
  }
  return arrayInput.join(" ");
}
//console.log(97 % 26);
console.log(test("BPQA qa I amkzmb umaaiom!", 8, false));
module.export = { getAlphabetArray };
