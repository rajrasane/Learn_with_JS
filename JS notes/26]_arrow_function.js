// Arrow Function

// - An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage
// - it has a smaller syntax compared to normal function , and here we don't use 'function' keyword while declaring it

// for e.g
const sum = (a,b) => {
    console.log(a+b);
};

const printhello = () => {
    console.log("Hello Everyone!");
};

//---------------------------------------------------------------------------------------------------------------------------------------

// Implicit Return

// - it is a arrow function returning just a single value , so which means it's not necessary to use return keyword
// - NOTE : it has a change in syntax than a regular arrow function i.e instead of {} we use ()

// for e.g
const mulpn = (a,b) => (
    a*b
);  

//---------------------------------------------------------------------------------------------------------------------------------------

// 'this' with arrow functions

// - when we use this keyword for a normal function , it is consider as a global scope 
// - when we use this keyword for a arrow function , it is consider as a parent scope or lexical scope

// for e.g
const student = {
    name : "Raj",
    marks : 9.55,
    property : this,// global scope <= window object
    getName : function () {
        console.log(this.name); // lexical scope <= student object
    },
    getMarks : () => {
        console.log(this);
        return this.marks; // parent's scope <= window object
    },
    
    // benefits
    getInfo1 : function() {
        setTimeout( () => {
            console.log(this); // student object
        },2000 )
    },
    getInfo2 : function() {
        setTimeout( function() {
            console.log(this); // window object
        },2000 )
    }
};

// i.e here in this e.g for normal function this = student
// and for a arrow function this = window
