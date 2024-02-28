// IF statement -

if(condition){
    //do something
}

//---------------------------------------------------------------------------------------------------------------------------------------

// ELSE IF statement - 

if(condition){
    //do something
}
else if(condition){
    //do something
}

//---------------------------------------------------------------------------------------------------------------------------------------

// NESTED ELSE IF - 

//for e.g

let marks = 90;

if(marks >=35){
    console.log("Pass");
    if(marks>=80){
        console.log("Grade O");
    }
    else if(marks>=70){
        console.log("Grade A+");
    }
    else if(marks>=60){
        console,log("Grade A");
    }
else{
    console.log("Better Luck Next Time!");
}
}