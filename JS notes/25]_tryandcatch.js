//                                               try and catch

// - whenever an error occurs , the code after the error will not be executed , here we use try and catch to encounter this issue.


// 1) try
// - the try statement allows you to define a block of code to be tested for errors while it is being executed

// 2) catch
// - the catch statement allows you to define a block of code to be executed , if an error occurs in the try block


// for e.g
console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch{
    console.log("Caught an error ... a is not defined")
}
console.log("hello");
console.log("hello");

