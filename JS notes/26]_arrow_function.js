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