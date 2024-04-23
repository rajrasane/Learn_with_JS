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

//---------------------------------------------------------------------------------------------------------------------------------------

// e.g of a callback hell

function savetoDb (data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }
    else{
        failure();
    }
}

savetoDb(
    "Name : Raj Rasane",
    ()=>{
    console.log("Success 1 : Data1 was Saved!");
    savetoDb(
        "Class : FYBCS",
        ()=>{
            console.log("Success 2 : Data2 was saved!");
            savetoDb(
                "Div : A",
                ()=>{
                    console.log("Success 3 : Data3 was saved!");
                },
                ()=>{
                    console.log("Failure 3 : Weak Connection.Data was not saved!")
                }
            )
        },
        ()=>{
            console.log("Failure2 : Weak Connection.Data was not saved!");
        }
    )
},
    ()=>{
    console.log("Weak Connection.Data was not saved!");
})

//---------------------------------------------------------------------------------------------------------------------------------------

// States in Promises :-

// - Pending: Initial state, neither fulfilled nor rejected.
// - Fulfilled (Resolved): The operation completed successfully.
// - Rejected: The operation failed.

//---------------------------------------------------------------------------------------------------------------------------------------

// Syntax for Creating a promise :

// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     if (/* operation is successful */) {
//         resolve(result);
//     } else {
//         reject(error);
//     }
// });

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g

function savetodb (){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10);
        if(internetSpeed > 4){
            resolve("Your Data was Saved!");
        }
        else{
            reject("Weak Connection!,Data not saved!");
        }
    })
}

//---------------------------------------------------------------------------------------------------------------------------------------

// Promise Methods :- 

// then() and catch() Methods :

// for e.g :- 
savetodb("Name : Raj Rasane")
.then(()=>{
    console.log("Promise was Resolved");
})
.catch(()=>{
    console.log("Promise was Rejected");
})

//---------------------------------------------------------------------------------------------------------------------------------------

// Chaining Promises
// - It means carrying out other tasks if 1st one is carried out successfully .

// for e.g
savetodb("Class : FYBCS")
.then(()=>{
    console.log("Promise1 was Resolved");
    return savetodb("Div : A");
})
.then(()=>{
    console.log("Promise2 was Resolved");
})
.catch(()=>{
    console.log("Some Promises Rejected");
})

//---------------------------------------------------------------------------------------------------------------------------------------

// Final Example of Promise using all concepts

let h1 = document.querySelector("h1");

function changecolour(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color Changed Successfully");
        },delay)
    });
}

changecolour("red",1000)
.then(()=>{
    console.log("Red Color was successfully applied!");
    return changecolour("orange",1000);
})
.then(()=>{
    console.log("Orange Color was successfully applied!");
    return changecolour("blue",1000);
})
.then(()=>{
    console.log("Blue Color was successfully applied!");
    return changecolour("green",1000);
})
.then(()=>{
    console.log("Green Color was successfully applied!");
})
.catch(()=>{
    console.log("Some promises were Rejected!")
})