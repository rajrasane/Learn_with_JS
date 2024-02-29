// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].

// let arr = [7, 9, 0, -2,5];

// let n = 3;

// let ans = arr.slice(0,n);
// console.log(ans);

//---------------------------------------------------------------------------------------------------------------------------------------

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, 0, -2]

// let ans1 = arr.slice(arr.length-n);
// console.log(ans1);

//---------------------------------------------------------------------------------------------------------------------------------------

// Qs3. Write a JavaScript program to check whether a string is blank or not

// let str = prompt("Pls enter a string :");
// if (str.length == 0){
//     console.log("Entered string is empty");
// }
// else{
//     console.log("Entered string is not empty");
// }

//---------------------------------------------------------------------------------------------------------------------------------------

// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

// let ind = 5;
// let char = "ApnaCollege";
// if(char[ind]==char[ind].toLowerCase()){
//     console.log("Given Character is Lowercase!");
// }
// else{
//     console.log("Given Character is not a Lowercase!");
// }

//---------------------------------------------------------------------------------------------------------------------------------------

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

// let str1 = prompt("Enter a String with Spaces");

// console.log(`Original String with spaces is ${str1}`);
// let str2 = str1.trim();
// console.log(`Trimmed String without spaces is ${str2}`);

//---------------------------------------------------------------------------------------------------------------------------------------

// Qs6. Write a JavaScript program to check if an element exists in an array or not.

// let arr5 = [1,2,4,5,"ram"];
// let val = "ram";
// if(arr5.indexOf(val)!=-1){
//     console.log("Element exists in the array !");
// }
// else{
//     console.log("Element doesn't exist in the array !")
// }

//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------

//                                                 Looping Questions

// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

// let a = [5,1,2,3,4,5,6];
// let num = 5;

// for(let i = 0;i<a.length;i++){
//     if(a[i]==num){
//         a.splice(i,1);
//     }
// }console.log(a)

//---------------------------------------------------------------------------------------------------------------------------------------

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

// let number = 6543924;
// let k = 0;
// let cpy = number;
// for(let i = 1;cpy>0;i++){
//     k++;
//     cpy = Math.floor(cpy/10);
// }
// console.log(k);

//---------------------------------------------------------------------------------------------------------------------------------------

// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

// let no = 287125;
// let sum = 0;
// let copy = no;
// while(copy>0);
// {
//     digit = copy%10;
//     sum = sum + digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

//---------------------------------------------------------------------------------------------------------------------------------------

// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1

//---------------------------------------------------------------------------------------------------------------------------------------

//                                                    Maths Methods

// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

// let dice = Math.floor(Math.random()*6 + 1);
// console.log(dice);

//---------------------------------------------------------------------------------------------------------------------------------------

// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

// const car = {
//     name : "Tata",
//     model : "107",
//     color : "Red"
// };
// console.log(car);

//---------------------------------------------------------------------------------------------------------------------------------------

// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States

// const person = {
//     name : "Ashish",
//     age : 18,
//     city : "Ghargaon"
// };
// console.log(person);
// person.city = "New York";
// person.country = "US";
// console.log(person);

//---------------------------------------------------------------------------------------------------------------------------------------

// Write a function to create a poem'

// function printpoem(){
//     console.log("Twinkle Twinkle , Little Star");
//     console.log("How I Wonder What You Are");
// };

// // Write a function to display a Dice

// function dice_ques(){
//     let ran = Math.floor(Math.random()*6+1);
//     console.log(ran);
// }

// dice_ques();

// Function returning average of 3 numbers

// function avg(a,b,c){
//     let average = (a+b+c)/3;
//     console.log(average);
// };

// avg(98,86,98);

// Print Multiplication table of any number using function

function gettable(a){
    for(let i = 1;i<=10;i++){
        console.log(i*a);
    }
};

// or we can use 

function tableof(n){
    for(i=n;i<=n*10;i+=n){
        console.log(i);
    }
};

tableof(5);