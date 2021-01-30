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