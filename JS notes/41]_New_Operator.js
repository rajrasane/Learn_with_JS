// New Operator

// - The `new` operator lets developers create an instance of a user-defined object type or of one of the 
// built-in object types that has a constructor function.
// - When a function is called with `new` keyword , the function will be used as a constructor

//---------------------------------------------------------------------------------------------------------------------------------------

// Constructors 
// -> Constructors are functions that doesn't return anything & start with Capital

// for e.g
function Person(name,age){ // Constructor
    this.name = name ;
    this.age = age ;
}

let p1 = new Person("Adam",20); // instance 
let p2 = new Person("John",30); // instance

//---------------------------------------------------------------------------------------------------------------------------------------
