// Spread (...)

// - expands an iterable(like array and strings) into multiple values

// syntax:-
// function funcName(...arr){
        //do something
// }

// for e.g
let arr = [1,0,2,3,4,5,6,7,8,9,-14];
function findmin(){
    console.log(Math.min(...arr));
};
// findmin();

//---------------------------------------------------------------------------------------------------------------------------------------

// Spread with Array Literals

// for e.g
let arr1 = [5,4,2,3,1,4,3,6];
let newarr1 = [...arr1];
console.log(newarr1);

let nname = [..."Vishwakarma"];
console.log(nname);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let allnums = [...even , ...odd];
console.log(allnums);

//---------------------------------------------------------------------------------------------------------------------------------------

// Spread with Object Literals

// for e.g
const student = {
    name : "Raj",
    Class : "FYBCS"
};

let StudentCopy = {
    ...student,
    Roll_no : 68
};

// - if we spread an array in a object , as we know array only consist of values ,not keys , while an object requires both key and value pair
// - then JS by default applies the array value's index no as key no 

let array = [52,63,64,53,53,86];
let object1 = {
    ...array
}; // o/p:- {0: 52, 1: 63, 2: 64, 3: 53, 4: 53, 5: 86}

let obj2 = {
    ...nname,
};  // o/p:- {0: 'V', 1: 'i', 2: 's', 3: 'h', 4: 'w', 5: 'a', 6: 'k', 7: 'a', 8: 'r', 9: 'm', 10: 'a'}

//---------------------------------------------------------------------------------------------------------------------------------------
