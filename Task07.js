//N.07 Домашнее задание VOWELS (а, у, о, ы, и, э, я, ю, ё, е))
vowelsCount = 42;

function countVowels(userInput) {
  var vowelsCount = 0;
  for (i = 0; i < userInput.length; i++) {
    if (
      userInput[i] == "а" ||
      userInput[i] == "у" ||
      userInput[i] == "о" ||
      userInput[i] == "ы" ||
      userInput[i] == "и" ||
      userInput[i] == "э" ||
      userInput[i] == "я" ||
      userInput[i] == "ю" ||
      userInput[i] == "е" ||
      userInput[i] == "ё"
    ) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

userInput = String(prompt("Введите строку: "));

console.log("Число гласных в строке: " + countVowels(userInput));
console.log(vowelsCount) // purity check