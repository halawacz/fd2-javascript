// N.07  Домашнее задание VOWELS (а, у, о, ы, и, э, я, ю, ё, е)
/* eslint-disable prefer-const */
/* eslint-disable no-undef */

let input = String(prompt('Введите строку и нажмите Enter: '));

function countVowels(input) {
  return Array.from(input).filter((c) => 'ауоыиэяюёеАУОЫИЭЯЮЁЕ'.includes(c))
    .length;
}

console.log(`Число гласных в строке: ${countVowels(input)}`);
