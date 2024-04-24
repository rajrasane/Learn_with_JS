// Factory Function 

// - Factory functions are functions that create and return objects.

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g
function createobjstud(name,age){
    const student = {
        name : name,
        age : age,
        talk(){
            console.log(`Hey , My name is ${this.name}`);
        }
    };

    return student;
}

let s1 = createobjstud("Raj",18);
console.log(s1);
let s2 = createobjstud("Onkar",19);
console.log(s2);

//---------------------------------------------------------------------------------------------------------------------------------------
