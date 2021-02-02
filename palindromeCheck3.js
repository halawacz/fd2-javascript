/* Написать чистую функцию, проверяющую, что переданная ей фраза является палиндромом.
(Палиндром - это фраза, которая слева направо читается так же как справа налево)
Массивы при решении не использовать.
При проверке должны игнорироваться:
 - регистр букв;
 - пробелы;
 - знаки препинания;
 - мягкие и твёрдые знаки;
 - разница между буквами "е" и "ё".
*/

// решение без массивов и рекурсии

function checkIfPalindrome(s) {
  let w = s
    .toLowerCase()
    .replace(/[\s.,!?;":'ъь\-]/g, '')
    .replace(/ё/g, 'е');

  if (w.length < 2) {
    return true;
  } else {
    for (i = 0; i < w.length / 2; i++) {
      if (w[i] != w[w.length - (i + 1)]) {
        return false;
      }
    }
    return true;
  }
}

// tests

let s1 = 'Съешь же ещё этих мягких французских булок, да выпей чаю!';
let s2 = 'Абфываолыфрал';
let s3 = '';
let s4 = 'а роза упала, на лапу Азора';
let s5 = 'Аргентина манит негра';
let s6 = '#'.repeat(10e3);

console.log(checkIfPalindrome(s1));
console.log(checkIfPalindrome(s2));
console.log(checkIfPalindrome(s3));
console.log(checkIfPalindrome(s4));
console.log(checkIfPalindrome(s5));
console.log(checkIfPalindrome(s6));
