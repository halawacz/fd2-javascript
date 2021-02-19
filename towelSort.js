function towelSort(arr) {
  let result = [];
  for (e in arr) {
    result.push(arr[0],...arr.length - 1)
  }
  return result;
}

function towelSort(matrix) {
  let result = [];
  for (const e in matrix) {
      console.log(e.length);
  }
  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(towelSort(matrix));
console.log(matrix.toString());

