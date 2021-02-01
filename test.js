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

  function check(w) {
    if (w.length < 2) {
      return true;
    }

    if (w.charAt(0) == w.charAt(w.length - 1)) {
      return check(w.slice(1, w.length - 1));
    }
    return false;
  }

  return check(tempString);
}

console.log(checkIfPalindrom(s1));
console.log(checkIfPalindrom(s2));
console.log(checkIfPalindrom(s3));
console.log(checkIfPalindrom(s4));
console.log(checkIfPalindrom(s5));

