/**
 * THE TERNARY OPERATOR
 */

// GLOBAL VARIABLE
let i = true;
let a = 0;
let b = 0;
let c = 0;
//...

// Basic implementation
console.log('Basic implementation');

i == true ? a++ : a = 0;
console.log(a);


// Secondary implementation
console.log('Secondary implementation');

i == true ? (a++, b++) : (a = 0, b = 0);
console.log(a, b);


// Multi-level implementation
console.log('Multi-level implementation');

i == true ? (a++, b++, c++) : (a = 0, b = 0, c = 0);
console.log(a, b, c);


// Failed implementation
// i == true ? (a++), (b++) : (a = 0), (b = 0);