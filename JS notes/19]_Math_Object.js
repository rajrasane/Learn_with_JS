// The Math object contains properties and methods for mathematical constants and functions.

// Math Properties :-


// Math.E
// Euler's number and the base of natural logarithms; approximately 2.718.

// Math.PI
// Ratio of a circle's circumference to its diameter; approximately 3.14159.


// Math Methods :-

// Math.abs(n)
// - returns absoulte value of a number , even if we enter a -ve no , it returns it back as +ve
console.log(Math.abs(-7));

// Math.pow(a,b)
// - used to calculate a power of a number
// - used instead of a**b
console.log(Math.pow(3,3));

// Math.floor(n)
// - rounds of nearest smallest int value
console.log(Math.floor(5.5));

// Math.ceil(n)
// - rounds of nearest largest int value
console.log(Math.ceil(5.3535434323));

// Math.random()
// - Generates a Random Number between 0 - 1 (we get decimal value of 0 , except 1)
console.log(Math.random());


// Generatig Random Integer Numbers from 1 to 10

let ran = Math.floor(Math.random()*10+1);
console.log(ran);

// Ques :- Generate a random number between 1 to 100

let numb = Math.floor(Math.random()*100+1);
console.log(numb);

// // Ques :- Generate a random number between 21 to 25

let num = Math.floor(Math.random()*5+21);
console.log(num);