function foo(a, b) {
  // Use short-circuiting to check for null or undefined values
  a = a ?? 0; 
  b = b ?? 0; 
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 5)); // Output: 5
console.log(foo(5, undefined)); //Output: 5