const text = `C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup`;

const words = text.split(" ");
console.log(words);
const uniqueCharactersArray = [];
function findFirstUniqueSymbol(array) {
  for (let word of array) {
    for (let i = 0; i < word.length; i++) {
      if (
        word.indexOf(word.charAt(i), word.indexOf(word.charAt(i)) + 1) === -1
      ) {
        uniqueCharactersArray.push(word[i]);
        break;
      }
    }
  }
  return;
}
findFirstUniqueSymbol(words);

console.log(uniqueCharactersArray);
let stringFromArray = uniqueCharactersArray.toString();
stringFromArray = stringFromArray.replaceAll(",", "");
console.log(stringFromArray);

let searchedCharacter = " ";
function findFirstUniqueSymbolinArray(string) {
  for (let i = 0; i < string.length; i++) {
    if (
      string.indexOf(string.charAt(i), string.indexOf(string.charAt(i) + 1)) ===
      -1
    ) {
      console.log((searchedCharacter = string[i]));
      break;
    }
  }
  return;
}
searchedCharacter = findFirstUniqueSymbolinArray(stringFromArray);

console.log(searchedCharacter);
