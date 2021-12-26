let s1 = 'Аргентина манит негра';
let s2 = 'Абфываолыфрал';
let s3 = '';
let s4 = 'а роза упала, на лапу Азора';
let s5 = 'Съешь же ещё этих мягких французских булок, да выпей чаю!';

function checkIfPalindrom(s) {
  let tempString = s
    .toLowerCase()
    .replace(/[\s.,!?;":'ъь\-]/g, '')
    .replace(/ё/g, 'е');

  function revString(w) {
    if (w == '') {
      return '';
    } else {
      return revString(w.substr(1)) + w.charAt(0);
    }
  }

  return tempString == revString(tempString);
}

console.log(checkIfPalindrom(s1));
console.log(checkIfPalindrom(s2));
console.log(checkIfPalindrom(s3));
console.log(checkIfPalindrom(s4));
console.log(checkIfPalindrom(s5));
console.log(checkIfPalindrom('$'.repeat(10e3)));
