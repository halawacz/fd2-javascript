//N.07 Домашнее задание VOWELS (а, у, о, ы, и, э, я, ю, ё, е)
function countVowels(input) {
  return Array.from(input).filter((c) => "ауоыиэяюёе".includes(c)).length;
}

input = String(prompt("Введите строку и нажмите Enter: "));
console.log("Число гласных в строке: " + countVowels(input));
