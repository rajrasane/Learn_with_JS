// * Array 

// - an array variable can consist of dfferent datatype values
// - arrays are mutable in javascript

// 1) Push
// - adds element to end of array list

// for e.g
let arr1 = [1,2,3,4];
let newarr1 = arr1.push(5);
console.log(arr1);

//---------------------------------------------------------------------------------------------------------------------------------------

// 2) Pop
// - Delete from end and returns it

// for e.g
let arr2 = [1,2,3,4,5,6,7];
arr2.pop();
console.log(arr2);

//---------------------------------------------------------------------------------------------------------------------------------------

// 3) Unshift
// - add to start

// for e.g
let arr3 = ["B","C","D"];
arr3.unshift("A");
console.log(arr3);

//---------------------------------------------------------------------------------------------------------------------------------------

// 4) Shift
// - delete from start and returns it

// for e.g
let arr4 = ["Red","Green","Yellow","Orange"];
arr4.shift();
console.log(arr4);

//---------------------------------------------------------------------------------------------------------------------------------------

// 5) IndexOf
// - returns index of something present in array , if not present, then returns/gives -1

// for e.g
let arr5 = ["Java","C","Python"];
console.log(arr5.indexOf("Python"));

//---------------------------------------------------------------------------------------------------------------------------------------

// 6) Includes
// - search for a value if exist or not in array
// - returns true or false according to situation
// for e.g
let arr6 = ["Pineapple","Banana"];
console.log(arr6.includes("Banana"));

//---------------------------------------------------------------------------------------------------------------------------------------

// 7) concat
// - merges two array variables
// - to concatinate first array with second array , we write as

// format - firstarrayName.concat(secondaryName);

//---------------------------------------------------------------------------------------------------------------------------------------

// 8) reverse
// - reverses an array
// - makes change in original array

// for e.g
let order = [5,4,3,2,1];
console.log(order.reverse());

//---------------------------------------------------------------------------------------------------------------------------------------

// 9) slice
// - copies a selected portion of an array and doesn't make change in original array
// - we provide startpoint and endpoint as Index , remember that endpoint's element is not included while returning array

// for e.g
let Names = ["Raj","Anurag","Sumit","Prathamesh"];
console.log(Names.slice(0,3));
// o/p:- ["Raj","Anurag","Sumit"]

//---------------------------------------------------------------------------------------------------------------------------------------

// 10) splice
// - removes/replaces/add elements in place
// - makes changes in original array 

// for e.g
let Fruits = ["apple","banana","grapes"];
console.log(Fruits.splice(1,1));

//---------------------------------------------------------------------------------------------------------------------------------------

// 11) sort
// - sorts an array
// - makes changes in original array after usage

// for e.g
let nums = [9,6,7,5,4,3,1,2];
console.log(nums.sort());

//---------------------------------------------------------------------------------------------------------------------------------------

// 12) foreach
// - This method executes a provided function once for each array element

// syntax:-
// arrayName.forEach(some function definition or name);

// for e.g
let arr = [1,2,3,4,5];
let print = function (el){
    console.log(el);
};
arr.forEach(print);
// or
arr.forEach((el)=>{
    console.log(el);
});
// using object
let arr04 = [{
    sname : "Raj",
    marks : 9.55
},
{
    sname : "Om",
    marks : 9.18
},
{
    sname : "Onkar",
    marks : 9.00
}];
arr04.forEach((stud)=>{
    console.log(stud.sname);
});

//---------------------------------------------------------------------------------------------------------------------------------------

// 13) map
// This method is similar to forEach method but it creates a new array populated with the results of calling a provided function on every element in the calling array.

// syntax:-
// let newArray = Arr.map(some function definition or name);

// for e.g
let arr9 = [2,4,6,8];
let arr10 = arr9.map(
    (el)=>{
        return el*2;
    }
);

let students = [{
    name : "Vishal",
    marks : 87
},{
    name : "Anurag",
    marks : 86
}]
let studwithGPA = students.map((el)=>{
    return el.marks/10;
});

//---------------------------------------------------------------------------------------------------------------------------------------

// 14) filter
// - This method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that satisfy the condition i.e true

// syntax:-
// let newArray = Arr.filter(some function definition or name);

// for e.g
let numbs = [1,2,3,4,5,6,7,8,9,10];
let evennumbs = numbs.filter((el)=>{
    return el % 2 == 0; //<- here even = true and odd = false
});

let oddnumbs = numbs.filter((el)=>{
    return el % 2 != 0; //<- here odd = true and even = false
});

//---------------------------------------------------------------------------------------------------------------------------------------

// 15) every 
// - returns true if every element of array gives true for some function . Else returns false
// -  It doesn't modify the array.

// syntax:-
// arr.every(some function definition or name);

// for e.g
let n = [2,4,6,8,10];
n.every((el)=>{
    return el%2==0;
});
// o/p :- true

[1,2,4,5,6,8,10].every((el)=> el%2==0 );
// o/p :- false

//---------------------------------------------------------------------------------------------------------------------------------------

// 16) some
// - tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.
// -  It doesn't modify the array.

// syntax:-
// arr.some(any function definition or name);

// for e.g
[1,23,4,5,6,7].some((el)=>el%2!=0);
// o/p :- true

//---------------------------------------------------------------------------------------------------------------------------------------

// 17) reduce
// this method combines elements of an array into a single value using a user-defined operation

let ans = [1,2,3,4].reduce((res,el)=>(res+el)); //<- here initially res is 0 , and later el's value is assigned after 1 iteration
console.log(ans);
// o/p:- 10

//- creating a function which returns a maximum value in the array using reduce
let a = [2,4,6,8,5,3,6,9,8,23];
let result = a.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log(result);

//---------------------------------------------------------------------------------------------------------------------------------------
