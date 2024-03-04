// Set Timeout

// - The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires 
// - usually used while calling the APIs
// - remember : while passing timeout in the setTimeout function , it only intakes time as millisecond i.e 1 second = 1000 millisecond

// syntax:-
// setTimeout( function/arrow function , delay/timeout )

// for e.g

console.log("Hi there");

setTimeout( () => {
    console.log("my Program")
} , 4000 ); //<- Here 4000ms means time delay will be of 4s

console.log("Welcome to");