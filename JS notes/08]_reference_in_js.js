// Array reference 
// - in js if we compare to arrays , it returns false because each array has a unique and separate address , so for making change in 
// a array we simply use concept of referencing i.e assigning one array to another

// for e.g

let arr1 = ['a','b','c'];
console.log(arr1);
let arr2 = arr1;
console.log(arr2);
arr2.push('d');
console.log(arr1);
console.log(arr2);
val = arr1 == arr2;
console.log(val);