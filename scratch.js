function check(str, bracketsConfig) {
  let re1 = bracketsConfig[0].toString();
  let re2 = bracketsConfig[1].toString();
  let x1 = str.split('').filter((x) => re1.includes(x));
  let x2 = str.split('').filter((x) => re2.includes(x));

  return x1.length == x2.length;
}

console.log(check('()', [['(', ')']]));
console.log(check('()', [['(', ')']])); // -> true
console.log(check('((()))()', [['(', ')']])); // -> true
console.log(check('())(', [['(', ')']])); // -> false
console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));// -> true
console.log(check('[(])', [['(', ')'], ['[', ']']])); // -> false
console.log(check('[]()', [['(', ')'], ['[', ']']])); // -> true
console.log(check('[]()(', [['(', ')'], ['[', ']']])); // -> false

function check(str, bracketsConfig) {
  let re1 = bracketsConfig[0].toString().replace(/[\s,]/g, "");
  let re2 = bracketsConfig[1].toString().replace(/[\s,]/g, "");
  let x1 = str
      .split("")
      .filter((x) => re1.includes(x))
      .toString();
  let x2 = str
      .split("")
      .filter((x) => re2.includes(x))
      .toString();



  console.log(re1);
  console.log(re2);
  console.log(x1);
  console.log(x2);
  let stack = [];

  for (let i = 0; i < str.length; i++) {
      
      if (re1.includes(str[i])) {
          stack.push(str[i]);
        
      }
      if (re2.includes(str[i])) {
          let last = stack.pop();
          if (!re2.includes(str[i])) {
            return false;
          }
      }
    if (stack.length != 0) {
       return false;
      } else {
        return true;
      }
        
      }
    }
    

console.log(check("((()))", ["([", ")]"]));
function check(str, bracketsConfig) {
  let openingBrackets = [];
  let closingBrackets = [];
  for (let j = 0; j < bracketsConfig.length; j++) {
      openingBrackets.push(bracketsConfig[j][0]);
  }
  console.log(openingBrackets);

  for (let k = 0; k < bracketsConfig.length; k++) {
      closingBrackets.push(bracketsConfig[k][1]);
  }

  console.log(closingBrackets);

  return !str.split("").reduce((uptoPrevChar, thisChar) => {
      if (openingBrackets.includes(thisChar)) {
          return ++uptoPrevChar;
      } else if (closingBrackets.includes(thisChar)) {
          return --uptoPrevChar;
      }

      return uptoPrevChar;
  }, 0);
};

//console.log(check('()', [['(', ')']]));
//console.log(check('()', [['(', ')']])); // -> true
//console.log(check('((()))()', [['(', ')']])); // -> true
console.log(check('())(', [['(', ')']])); // -> false
//console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));// -> true
//console.log(check('[(])', [['(', ')'], ['[', ']']])); // -> false
//console.log(check('[]()', [['(', ')'], ['[', ']']])); // -> true
//console.log(check('[]()(', [['(', ')'], ['[', ']']])); // -> false
module.exports = function check(str, bracketsConfig) {
  //let brackets = "[]{}()<>";
  let brackets = bracketsConfig.toString();
  let stack = [];

  for (let bracket of str) {
      let bracketsIndex = brackets.indexOf(bracket);

      if (bracketsIndex === -1) {
          continue;
      }

      if (bracketsIndex % 2 === 0) {
          stack.push(bracketsIndex + 1);
      } else {
          if (stack.pop() !== bracketsIndex) {
              return false;
          }
      }
  }
  return stack.length === 0;
};
//console.log(check("())(", [["(", ")"]])); // -> false
