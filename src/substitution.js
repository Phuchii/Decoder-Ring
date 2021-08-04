// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (!(alphabet.length === 26)) return false; //check for 26 letters
    const unique = [];
    let substitution = "";
    input = input.toLowerCase();
    const normal = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 26; i++) {
      //check for duplicate letters
      const letter = alphabet[i];
      if (unique.includes(letter)) {
        return false;
      }
      unique.push(letter);
    }
    if (encode) {
      //encode true
      for (let i = 0; i < input.length; i++) {
        let alphabetIndex = input.charCodeAt(i) - 97; //find index of input letter relative to normal alphabet
        if (input.charCodeAt(i) === 32) {
          //accounts for spaces
          substitution += " ";
        } else {
          substitution += alphabet[alphabetIndex]; //swap with the new indexed letter
        }
      }
      return substitution;
    } else {
      //encode = false
      for (let i = 0; i < input.length; i++) {
        let letterIndex = alphabet.indexOf(input[i]); //find index of current letter in sub
        if (input[i] === " ") {
          //accounts for spaces
          substitution += " ";
        } else {
          substitution += normal.charAt(letterIndex); //find the normal alphabet equivalent
        }
      }
      return substitution;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
