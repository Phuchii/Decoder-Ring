// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const caesarModule = (function () {
  // you can add any code you want within this function scope

  function getAlphabetArray() {
    //makes alphabet
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
  function caesar(input, shift = 0, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0) return false; //control bounds for shift
    if (!encode) shift *= -1; //flips around for encode = false
    let alphabet = getAlphabetArray();
    let arrayInput = input.toLowerCase().split(" ");

    for (let i = 0; i < arrayInput.length; i++) {
      let cypherWord = "";
      for (let j = 0; j < arrayInput[i].length; j++) {
        if (!alphabet.includes(arrayInput[i][j])) {
          cypherWord += arrayInput[i][j];
          break;
        }
        let cypherLetter = ((arrayInput[i].charCodeAt(j) % 97) + shift) % 26; //get the shifted letter

        if (cypherLetter < 0) cypherLetter = alphabet.length + cypherLetter;

        cypherWord += alphabet[cypherLetter]; //adds the shifted letter to make cypher
      }
      arrayInput[i] = cypherWord;
    }
    return arrayInput.join(" ");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
