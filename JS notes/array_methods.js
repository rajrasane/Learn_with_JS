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
// - returns index of something present in array , if not gives -1

// for e.g
let arr5 = ["Java","C","Python"];
console.log(arr5.indexOf("Python"));

//---------------------------------------------------------------------------------------------------------------------------------------

// 6) Includes
// - search for a value if exist or not in array

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

// for e.g
let order = [5,4,3,2,1];
console.log(order.reverse());

//---------------------------------------------------------------------------------------------------------------------------------------

// 9) slice
