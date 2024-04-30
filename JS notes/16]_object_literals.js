// Object Literals


// - we generally make objects constant while declaring
// - used to store keyed collections and complex entities

// property => (key,value)pair

// - objects are collections of properties

// for e.g
const student = {
    name : "Raj",
    age : 19,
    gender : "Male",
    class : "FYBCS",
    Marks : 9.55
};

//---------------------------------------------------------------------------------------------------------------------------------------

// Get Values
// - To get values stored in object , there are two methods

// 1) Using key in string format
console.log(student["age"]);

// 2) Using dot operator
console.log(student.Marks);

//---------------------------------------------------------------------------------------------------------------------------------------

// JS property

// - Js automatically converts object keys to strings
// -Even if made number as key , the number will be converted to string

// -for e.g
let obj = {
    1 : "Val1",
    2 : "val2",
    true : "Val3"
};

// - here JS will consider even the number keys as a string , while on the other hand - dot operator doesn't convert number to strings , so there will be error

//---------------------------------------------------------------------------------------------------------------------------------------

// Adding , Updating and Deleting Values in Object Literals

const teacher = {
    name : "Meena",
    age : 29,
    city : "Pune"
};

// Updating a Value
teacher.city = "Sangamner";

// Adding a Value
teacher.gender;
teacher.gender = "Female";

// Deleting a key and Value 
delete teacher.age;