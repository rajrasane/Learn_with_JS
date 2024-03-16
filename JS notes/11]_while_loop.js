// While loop 

// syntax : 
//  while(condtion){
//       Do Something
// }

console.log("Numbers:");
let n = 0;
while(n<=20){
    console.log(n);
    n++
}



console.log("Even Numbers:");
let i = 0;
while(i<=20){
    console.log(i);
    i=i+2;
}

console.log("Odd Numbers:");
let j = 1;
while(j<=20){
    console.log(j);
    j=j+2;
}


// Movie Game

const favmov="avatar";

let guess = prompt("Guess my favourite movie : ");

while((guess!=favmov) && (guess!="quit") ){
    guess = prompt("Wrong guess ! Pls try again : ");
}

if(guess==favmov){
    console.log("Congrats!");
}else{
    console.log("you quit !");
}