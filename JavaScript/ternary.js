/**
 * THE TERNARY OPERATOR
 */

// GLOBAL VARIABLE
let i = true;

// Basic implementation
console.log('Basic implementation');

i == true ? console.log('I\'m TRUE!') : console.log('I\'m FALSE!');


// Secondary implementation
console.log('Secondary implementation');

i == true ? (console.log('I\'m TRUE!'), console.log('I am also TRUE!')) : (console.log('I\'m FALSE!'), console.log('I am also FALSE!'));


// Multi-level implementation
console.log('Multi-level implementation');

i == true ? (console.log('I\'m TRUE!'), console.log('Me too!'), console.log('Me three!')) : (console.log('I\'m FALSE!'), console.log('Me too'), console.log('Me three!'));