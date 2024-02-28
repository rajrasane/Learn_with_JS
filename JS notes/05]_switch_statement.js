// - Used when we have some fixed values that we need to compare to
// - remember to give 'break;' staement after end of each case

// for e.g

let color = "green";
switch(color){
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Slow Down!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Light is broken!");
        break;        
}