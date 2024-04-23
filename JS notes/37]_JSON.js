// JSON (JavaScript Object Notation) 

// - JSON is a lightweight data interchange format that is easy for humans to read and write and
//  easy for machines to parse and generate.
// -  JSON data is written as key-value pairs, where keys are strings enclosed in double quotes and 
// values can be strings, numbers, booleans, arrays, or objects.
// - Whenever we request data to APIs its response is always in the form of string

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g
// {
//     "name": "John",
//     "age": 30,
//     "isStudent": false,
//     "courses": ["Math", "Science", "History"],
//     "address": {
//         "city": "New York",
//         "country": "USA"
//     }
// }

//---------------------------------------------------------------------------------------------------------------------------------------

// Data Types Supported :-

// String: Enclosed in double quotes.
// Number: Integer or floating-point numbers.
// Boolean: True or false.
// Array: Ordered list of values enclosed in square brackets ([]).
// Object: Unordered collection of key-value pairs enclosed in curly braces ({}).
// Null: Represents an empty value or absence of data.

//---------------------------------------------------------------------------------------------------------------------------------------

// JSON vs XML :-

// - JSON is generally more lightweight and easier to read and write compared to XML (eXtensible Markup Language).
// - JSON has a simpler syntax, while XML is more verbose and complex.

//---------------------------------------------------------------------------------------------------------------------------------------

// Accessing Data from JSON :-


// Method 1 : JSON.parse(data)

// - To parse/convert a string into a JS Object
// - in short here we convert json data in js object

// for e.g
let jsonres = '{"fact": "A cat cannot see directly under its nose.","length": 41}';

let validres = JSON.parse(jsonres);
console.log(validres.fact)


// Method 2 : JSON.stringify(json)

// - To parse/convert a JS object data into JSON
// - is used while creating our own APIs

// for e.g
let stud = {
    name : "raj",
    class : "FYBCS"
};

let studJSON = JSON.stringify(stud);
console.log(studJSON);

//---------------------------------------------------------------------------------------------------------------------------------------

// Testing API request : Tools -

// 1) Hoppscoth
// 2) Postman

//---------------------------------------------------------------------------------------------------------------------------------------

