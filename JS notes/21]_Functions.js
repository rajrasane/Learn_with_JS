// Function
// - a function is a block of code which can perform a certain task , and later only after calling the function,it executes

//---------------------------------------------------------------------------------------------------------------------------------------

// Function Definition 

 function FuncName(){
        //Do Something;
}

//---------------------------------------------------------------------------------------------------------------------------------------

// Function Calling

FuncName();


// for e.g
function helloworld(){
    console.log("Hello World!");
}

helloworld();


function print1to5(){
    for(let i = 1;i<=5;i++){
        console.log(i);
    }
}

print1to5();


function isadult(){
    let age = prompt("Enter your age");
    if(age<18){
        console.log("You are not a Adult");
    }else{
        console.log("You are a Adult")
    }
}

isadult();

//---------------------------------------------------------------------------------------------------------------------------------------

// Function with arguments

// syntax:-
 function fname(arg1,agr2){
        //do something
}

// for e.g

function userdtl(name,age){
    console.log(`${name}'s ages is ${age}`);
};

userdtl("raj",18);

// for e.g

function addn(a,b){
    let sum = a+b;
    console.log(`Addition of ${a} and ${b} is ${sum}`)
};

addn(41243,54345)

//---------------------------------------------------------------------------------------------------------------------------------------

// Return Keyword 


// - Anything after the return statement will not be executed

function subn(a,b){
    return a-b;
    console.log(sum);
};

// Method 1 : console.log(subn(13,5));

// Method 2 :  console.log(subn(subn(13,6),5))

// for e.g
function chkadult(age){
    if(age>=18){
        return "Adult";
    }else{
        return "Not Adult";
    }
};

//---------------------------------------------------------------------------------------------------------------------------------------

// Function Expressions


// -In this we store a function into variable 
// -If the function has parameters , then we can mention them with variable name (which is holding the function)

// For E.g

let sum = function(a,b){
    console.log(a+b);
}

//Calling:- sum(1,2);

// - if later we want to change the function , then we can do so with function expressions because , it is stored in variable , so we can change it's value afterward

//---------------------------------------------------------------------------------------------------------------------------------------

// Higher Order Functions


// - a Higher Order Functions is a function that does one or both from below

// 1) take one or multiple function as arguments
// 2) returns a function 

// for e.g
let msg = function mess(){
    console.log("Welcome");
}

function multiplemsg(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}

//Calling:- multiplemsg(msg,50);

//---------------------------------------------------------------------------------------------------------------------------------------

// Returning a Higher Order Function


// for e.g
function checkoddoreven(request){
    if(request=="odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request=="even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("Wrong Request");
    }
}

