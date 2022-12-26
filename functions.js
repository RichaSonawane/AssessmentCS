// Sum Zero

function addToZero(arr) {
  let isZero = false;
  for (let i = 0; i < arr.length; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[i] + arr[x] === 0) {
        isZero = true;
        return true;
      }
    }
  }
  return false;
}

let result = addToZero([1, 2, 3, -2]);
console.log(result);
console.log("-------------------------");

//TIME COMPLEXITY FOR addToZero FUNCTION : O(n^2) 
//SPACE COMPLEXITY: O(n)

//-------------------------------------------------------------------------------------------------------------
//Unique Characters

function isUnique(str) {
  const chars = new Set();

  for (let i = 0; i < str.length; i++) {
    const thisChar = str[i];

    if (chars.has(thisChar)) {
      return false;
    }

    chars.add(thisChar);
  }

  return true;
}
console.log(isUnique("moonday"));
console.log("-------------------------");
//TIME COMPLEXITY FOR isUnique FUNCTION: O(n)
//SPACE COMPLEXITY:O(n)

//-------------------------------------------------------------------------------------------------------------
//Pangram Sentence
// a function to check a sentence to see if it is a pangram or not.
function isPangram(input) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  //let input = prompt();
  let newInput = input.toLowerCase();
  let icount = 0;

  for (let i = 0; i < alphabets.length; i++) {
    var letter = alphabets[i];
    if (newInput.indexOf(letter) > -1) {
      icount++;
    }
  }
  if (icount == 26) {
    return true;
  } else {
    return false;
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
//console.log(isPangram("Hello"));
console.log("-------------------------");

//TIME COMPLEXITY FOR isPangram FUNCTION: O(n)
//SPACE COMPLEXITY:O(1)
//-------------------------------------------------------------------------------------------------------------
//Longest Word
function findLongestWord(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word.length;
}
let res = findLongestWord(["hi", "hello"]);
console.log(res);

//TIME COMPLEXITY FOR findLongestWord FUNCTION:O(n)
//SPACE COMPLEXITY:O(n)
