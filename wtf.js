function descendingOrder(n) {
  return parseInt(
    Array.from(n.toString())
      .sort((a, b) => b - a)
      .toString()
      .replace(/,/g, '')
  );
}

// tests

console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(12345));
