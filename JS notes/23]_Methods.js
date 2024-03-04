// Methods 

// - Methods are the actions that can be performed on an object

// for E.g
// - Making Calulator 

const calculator = {
    add : function(a,b){
        console.log(a+b);
    },
    sub : function(a,b){
        console.log(a-b);
    },
    mul : function(a,b){
        console.log(a*b);
    },
    div : function(a,b){
        console.log(a/b);
    },
}


//---------------------------------------------------------------------------------------------------------------------------------------


// Methods Shorthand

// for e.g

const calci = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}

