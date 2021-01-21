const input = '   asdf   ';
console.log(`|${trimWhiteSpaces(input)}|`);

function trimWhiteSpaces(input) {
  let i = 0;
  let j = input.length - 1;

  while (input.charAt(i) == ' ') {
    i++;
  }

  if (i == j) {
    return '';
  } else {
    while (input.charAt(j) == ' ') {
      j--;
    }
    return input.substring(i, j + 1);
  }
}
