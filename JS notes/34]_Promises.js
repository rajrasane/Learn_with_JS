// Before getting towards promises , this things are essential to know :- 



// JS Single Threaded Nature

// - It refers to that , JS can only execute one task at a time, making it efficient for web browsers.

//---------------------------------------------------------------------------------------------------------------------------------------

// JS Asynchronous Nature

// - Asynchronous nature means tasks can happen independently.
// So, when one task is running, others can start too, instead of waiting for it to finish.
// This keeps everything moving smoothly, like how you can cook while your laundry is running.

//---------------------------------------------------------------------------------------------------------------------------------------

// Callback Hell

// - Callback hell occurs when you have multiple nested callbacks in your code. This happens in asynchronous JavaScript programming
// The problem arises when these callbacks are nested within each other, creating a complex and hard-to-follow structure, like a maze of function calls.
// This can make your code difficult to understand, debug, and maintain.


//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------


// - So to tackle these callback hell problems , we use several asynchronous programming patterns or techniques . In which the first one is :- 


//---------------------------------------------------------------------------------------------------------------------------------------


// * Promises 


// - Promises are primarily used to tackle callback hell by providing a more structured and readable way to handle asynchronous operations. 
// - While promises leverage JavaScript's asynchronous nature, their main purpose is to offer a solution to the nesting of callbacks and 
// to simplify asynchronous code.
// - They enable you to chain asynchronous operations more cleanly and avoid the pyramid-like structure that often arises with nested callbacks.

//---------------------------------------------------------------------------------------------------------------------------------------

// Definition :-

// -  Promises are objects used in JavaScript for asynchronous programming. They represent the eventual completion or failure of an asynchronous operation,
//  and its resulting value.
