<<<<<<< HEAD
/*
Написать чистую функцию, эффективно удаляющую из переданной ей строки все начальные и конечные пробелы.
Без trim, regex, array methods.
*/

// const input = String(prompt('Введите строку: '));
const input = " asdf ";
console.log(`|${trimWhiteSpaces(input)}|`);

function trimWhiteSpaces(input) {
  let i = 0;
  let j = input.length - 1;

  while (input.charAt(i) == " ") {
    i++;
  }

  if (i == input.length) {
    console.log(
      "string consists of whitespaces or is empty, returning empty string"
    );
    return "";
  }

  while (input.charAt(j) == " ") {
    j--;
  }

  if (i == 0 && j == input.length - 1) {
    console.log(
      "string has no white spaces to trim, returning original string"
    );
    return input;
  }
  console.log("using the substring method");
  return input.substring(i, j + 1);
}
=======
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
// performs reduntant checks -  rewrite
function checkIfPalindrom(s) {
  function check(w) {
    if (w.length < 2) {
      return true;
    } else {
      count = 0;
      for (i = 0; i < Math.floor(w.length / 2); i++) {
        count += w.charAt(i) == w.charAt(w.length - (i + 1));
      }
      return count == (Math.floor(w.length / 2)) ? true : false;
    }
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
let s6 = '#'.repeat(10e3);
let s7 = '$'.repeat(13);

console.log(checkIfPalindrom(s1));
console.log(checkIfPalindrom(s2));
console.log(checkIfPalindrom(s3));
console.log(checkIfPalindrom(s4));
console.log(checkIfPalindrom(s5));
console.log(checkIfPalindrom(s6));

>>>>>>> aa5289618aed3373cd71a5be24481e3d68f1605f
