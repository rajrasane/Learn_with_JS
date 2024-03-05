// Destructuring

// - storing values of array in multiple variables

// for e.g
let participants = ["Raj","Om","Onkar","Sumit"];
let [winner,runnerup,secondrunnerup] = participants;
console.log(winner,runnerup,secondrunnerup);

// we could have also assign values to these variables using the normal method i.e
// winner = participants[0]; and so on...

// - but our code becomes more short and compact by using this destructuring method

// for e.g
let students = ["Sahil","Ayush","Pratik","Tejas"];
let [passstud , passstud1 , ...failstuds] = students;
console.log("Passed Students :");
console.log(passstud,passstud1);
console.log("Failed Students :");
console.log(failstuds);

//---------------------------------------------------------------------------------------------------------------------------------------

// Destructuring : Objects

// for e.g
const teacher = {
    name : "Meena",
    city : "Pune",
    Id : 12
};

let {name : tname, city} = teacher;
console.log(tname,city);

// - we can store key's value into a different variable , as we did here with 'tname'

//---------------------------------------------------------------------------------------------------------------------------------------

