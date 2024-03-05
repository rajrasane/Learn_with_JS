// Rest (...)

// - it is opposite of Spread
// - it allows a function to take an indefinite number of arguments and bundle them in an array 
// - the syntax of spread and rest is same

// for e.g
function yourdata(...args) { //arguments
    for(let i = 0;i<args.length;i++){
        console.log(`You Gave us ${args[i]}`);
    }
};

returnsum = (...arg) => {
    return arg.reduce((sum,el)=>sum+el);
};

