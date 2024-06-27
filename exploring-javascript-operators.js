let number1 = 10;
let number2 = 5;

let sum = number1 + number2
let difference = number1 - number2
let product = number1 * number2
let quotient = number1 / number2

console.log(`Sum: ${sum}`)
console.log(`Difference: ${difference}`)
console.log(`Product: ${product}`)
console.log(`Quotient: ${quotient}`)

number1 = 30;
number2 = 15;

console.log(`Update number1: ${number1}`)
console.log(`Update number2: ${number2}`)

let equal = number1 === number2
let greater = number1 > number2
let not_equal = number1 != number2 

console.log(`Is number1 equal to number2? ${equal}`);
console.log(`Is number1 greater than number2? ${greater}`);
console.log(`Is number1 not equal to number2? ${not_equal}`);

let isPositive = (number1 > 0) && (number2 > 0);
let isEven = (number1 % 2 === 0) || (number2 % 2 === 0);

console.log(`Are both number Positive? ${isPositive}`)
console.log(`Is at least one number even? ${isEven}`)