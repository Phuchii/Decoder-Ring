const alphabet = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "(i/j)", "k"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z"],
];
function hi(input, encode = true) {
  let inputArray = []; //turns input into array to modify to desired outcome
  if (encode) {
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      //find row and col equivalent of char
      let row = Math.floor((input.charCodeAt(i) - 97) / 5 + 1);
      let col = ((input.charCodeAt(i) - 97) % 5) + 1;
      if (input.charCodeAt(i) === 107) {
        //specific to k

        row = row - 1;
        col = 5 - col + 1;
      } else if (input.charCodeAt(i) >= 106) {
        //letters after j not including k

        if (col === 1) {
          col = 6;
          row = row - 1;
        }
        col = col - 1;
      }
      if (input.charCodeAt(i) !== 32) {
        //pushes col and row unless char was a space

        inputArray.push(col);
        inputArray.push(row);
      } else {
        inputArray.push(" ");
      }
    }
    console.log(inputArray.join(""));
    return inputArray.join(""); //converts from array to string
  } else {
    //encode = false
    joinedInput = input.split(" ").join(""); //removes spaces from array for ease of forloop
    if (joinedInput.length % 2 === 0) {
      //input is even
      space = input.indexOf(" "); //saves index of space
      for (let i = 0; i < joinedInput.length; i = i + 2) {
        const letter = alphabet[joinedInput[i + 1] - 1][joinedInput[i] - 1];
        if (i == space) {
          input = input.slice(0, space) + input.slice(space + 1); //in case of multiple spaces removes space from input and checks for more
          space = input.indexOf(" ");
          inputArray.push(" "); //returns space back to sentence
        }
        inputArray.push(letter);
      }
      inputArray = inputArray.join("");
      console.log(inputArray);
      return inputArray;
    } else {
      //input is uneven returns false
      console.log("no");
      return false;
    }
  }
}

hi("i am the bone of my sword");
