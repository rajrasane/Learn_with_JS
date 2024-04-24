// Object Prototypes

// - Every object in JS has a build-in property called its prototype .
// - Prototypes are mechanism by which JS objects inherit features from one another .
// - It's like a single template object that all objects inherit methods and properties from without having their own copy.

//---------------------------------------------------------------------------------------------------------------------------------------

// Accessing Prototype Methods :

const myObj = {
    name : "raj",
    age : 18,
    class : "FYBCS"
};

myObj.__proto__.methodName(); // Access using __proto__ (not recommended)
myObj.methodName(); // Access using dot notation

//---------------------------------------------------------------------------------------------------------------------------------------

// Accessing Prototype Properties :

const myObj2 = {};

myObj.__proto__.propertyName; // Access using __proto__ (not recommended)
myObj.propertyName; // Access using dot notation

//---------------------------------------------------------------------------------------------------------------------------------------

// - In short , if we directly use Object Prototype while creating functions or methods , then that method can be 
// accessed by any variable or same object or datatype , like Array , String and more.

//---------------------------------------------------------------------------------------------------------------------------------------