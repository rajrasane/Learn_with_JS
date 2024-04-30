// Set Interval

// - it is same as setTimeout() , but here the difference is that , it repeatedly calls a function with fixed time delay between each call while setTimeout was only executing it once
// - setInterval allocates a unique Id to each of it's function , and we store it in a variable 

// for e.g

let Id = setInterval ( () => {
    console.log("Hello");
} , 2000 );

let Id2 = setInterval ( () => {
    console.log("World");
} , 2000 );

//---------------------------------------------------------------------------------------------------------------------------------------

clearInterval(Id)
clearInterval(Id2);

// - The clearInterval function is used to stop the execution of a previously set interval created by setInterval. 
// - It takes an interval ID as an argument and cancels the interval associated with that ID.