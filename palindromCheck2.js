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

function checkIfPalindrom(s) {
  function check(w) {
    if (w.length < 2) {
      return true;
    }
    if (w.charAt(0) == w.charAt(w.length - 1)) {
      return check(w.slice(1, w.length - 1));
    }
    return false;
  }

  return check(
    s
      .toLowerCase()
      .replace(/[\s.,!?;":'ъь\-]/g, '')
      .replace(/ё/g, 'е')
  );
}

// tests

let s1 = 'Съешь же ещё этих мягких французских булок, да выпей чаю!';
let s2 = 'Абфываолыфрал';
let s3 = '';
let s4 = 'а роза упала, на лапу Азора';
let s5 = 'Аргентина манит негра';
let s6 = '$'.repeat(10e3);

console.log(checkIfPalindrom(s1));
console.log(checkIfPalindrom(s2));
console.log(checkIfPalindrom(s3));
console.log(checkIfPalindrom(s4));
console.log(checkIfPalindrom(s5));
console.log(checkIfPalindrom(s6));
