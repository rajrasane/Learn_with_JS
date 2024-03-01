//                                     Scope

// It determines the accessibility of variables , objects , and functions from different parts of the code

// It consist of :-

// Function
// Block
// Lexical


// 1)Function Scope 
// - Variables defined inside a function are not accessible from outside the function

// For e.g
let sum = 100; //Global Scope

function addn(a,b){
    let sum = 0;
    sum = a + b; //Function Scope
    return sum;
};

//---------------------------------------------------------------------------------------------------------------------------------------

// 2)Block scope - {}
// - Variables declared inside a {} cannot be accessed from outside the block
// - This scope only applies if variables inside the block {} are declared with let or const keyword , not applicable for var keyword

// For e.g
{
    let i = 1; //Block Scope
}

//---------------------------------------------------------------------------------------------------------------------------------------

// 3)Lexical Scope
// - a variable defined outside a function can be accessible inside another function defined after the variable declaration 
// - The opposite/reciprocal is Not True though

// For e.g
function outfunc(){
    let x = 5;
    let y = 10;
    function innerfunc(){
        console.log(x+y);
    }
    innerfunc();
}