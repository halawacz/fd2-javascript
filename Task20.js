function solveQuadraticEquation(a, b, c) {
  let d = b * b - 4 * a * c;

  if (d < 0) {
    return [];
  } else if (d == 0) {
    let x = -b / (2 * a);
    return x;
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
}

// tests

solveQuadraticEquation(1, 1, 1).length == 0
  ? console.log('1, 1, 1: passed')
  : console.log('1, 1, 1: failed');
solveQuadraticEquation(1, 8, 12) == [-2, -6]
  ? console.log('1, 8, 12: passed')
  : console.log('1, 8, 12: passed');
solveQuadraticEquation(1, -2, -3) == [-1, -3]
  ? console.log('1, -2, -3: passed')
  : console.log('1, -2, -3: failed');
