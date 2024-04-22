// Call Stack

// - A call stack is a way for a program to keep track of which functions are currently running and the order in which they were called.
// - When a function is called, it's added to a stack. 
// - The interpreter runs it and any functions called inside are added on top of the stack. 
// - When the function finishes, it's removed from the top of the stack.

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g 1).

function hello (){
    console.log("Hello");
}

function demo(){
    hello();
}

demo();


// 2).

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

//---------------------------------------------------------------------------------------------------------------------------------------

// - Consider a Imaginary Stack of functions , the last called function is stored in this stack at bottom and if there exists called 
// functions within the last called function then they added after simultaneously above the last one , when the particular called function has executed 
// it's procedure then consider it is removed from the stack , this happens until the last called function in the stack is executed