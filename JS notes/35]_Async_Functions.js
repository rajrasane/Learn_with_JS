// Async Functions

// - Async functions are a type of function in JavaScript used to handle asynchronous operations in a more synchronous and readable manner.
// - Async functions are declared using the async keyword before the function name. They allow the use of await inside the function body
// to handle asynchronous tasks cleanly, without explicit promise chaining.

//---------------------------------------------------------------------------------------------------------------------------------------

// Syntax :
async function myAsyncFunction() {
    // Function body
}

//---------------------------------------------------------------------------------------------------------------------------------------

// Await Keyword :

// - The await keyword is used inside async functions to pause execution until a promise is settled (resolved or rejected).
// - It can only be used inside async functions.
// - Await makes asynchronous code look and behave more like synchronous code, making it easier to read and understand.

// Use of await -
async function myAsyncFunction() {
    const result = await someAsyncOperation();
    // Use result
}

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g

async function greet(){
    // throw "404"; //for error
    return "Welcome";
}

// greet()
// .then((result)=>{
//     console.log("Promise was Resolved!");
//     console.log("Result was : ",result);
// })
// .catch((error)=>{
//     console.log("Promise was Rejected with Error : ",error);
// })

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g

function getnum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000);
    })
}

async function demo(){
    await getnum();
    await getnum();
    getnum();
}

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g Handling rejections using try and catch in async

let h1 = document.querySelector("h1");

function colorchange(color,delay){
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random()*5)+1;
        if(num>4){
            reject ("Promise rejected!");
        }
        setTimeout(() => {
            h1.style.color = color;
            console.log("Text color was Changed to ",color);
            resolve("Color Changed!");
        }, delay);
    })
}

async function display(){
    try{
        await colorchange("red",1000);
        await colorchange("orange",1000);
        await colorchange("blue",1000);
        await colorchange("green",1000);
        await colorchange("black",1000);
    }
    catch(err){
        console.log("Error Caught!");
        console.log(err)
    }

    let a = 5;
    console.log(a);
    console.log("New value : ",a+3);
}

//---------------------------------------------------------------------------------------------------------------------------------------

