// Function Definition 

//      function FuncName(){
               // Do Something
//      }



// Function Calling

//       FuncName();

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g
function helloworld(){
    console.log("Hello World!");
}

helloworld();


function print1to5(){
    for(let i = 1;i<=5;i++){
        console.log(i);
    }
}

print1to5();

function isadult(){
    let age = prompt("Enter your age");
    if(age<18){
        console.log("You are not a Adult");
    }else{
        console.log("You are a Adult")
    }
}

isadult();