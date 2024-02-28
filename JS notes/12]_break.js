// Break
// - used for getting out of a loop .
// - mostly used in while loop cases .

const favmov="avatar";

let guess = prompt("Guess my favourite movie : ");

while(guess!=favmov) {

    if(guess=="quit"){
        console.log("You Quitted!");
        break;
    }
    guess = prompt("Wrong guess ! Pls try again : ");
}

if(guess==favmov){
    console.log("Congrats!");
}