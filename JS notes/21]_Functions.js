// Function Definition 

//      function FuncName(){
               // Do Something
//      }



// Function Calling

//       FuncName();

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g
// function helloworld(){
//     console.log("Hello World!");
// }

// helloworld();


// function print1to5(){
//     for(let i = 1;i<=5;i++){
//         console.log(i);
//     }
// }

// print1to5();

// function isadult(){
//     let age = prompt("Enter your age");
//     if(age<18){
//         console.log("You are not a Adult");
//     }else{
//         console.log("You are a Adult")
//     }
// }

// isadult();

//---------------------------------------------------------------------------------------------------------------------------------------

//                       Function with arguments

//  function fname(arg1,agr2){
        // do something
// }

// for e.g

// function yourname(name,age){
//     console.log(`${name}'s ages is ${age}`);
// };

// yourname("raj",18);

// for e.g

// function addn(a,b){
//     let sum = a+b;
//     console.log(`Addition of ${a} and ${b} is ${sum}`)
// };

// addn(41243,54345)

//---------------------------------------------------------------------------------------------------------------------------------------

//                        Return Keyword 

// - Anything after the return statement will not be executed

function subn(a,b){
    return a-b;
    console.log(sum);
};

// Method 1 : console.log(subn(13,5));

// Method 2 :  console.log(subn(subn(13,6),5))

// for e.g
function chkadult(age){
    if(age>=18){
        return "Adult";
    }else{
        return "Not Adult";
    }
};

console.log(chkadult(3))