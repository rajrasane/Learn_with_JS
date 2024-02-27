// For - Of

// - usually used for accessing collection of items

// syntax :
// for(element of collection){
    // do something
// }

// for e.g
let frts = ['apple','banana','mango','grpaes'];
for(frt of 'mango'){
    console.log(frt);
}

// nested for-of loop

let vegies = [['Potato','Tomato','Sweet Potato'],['Ladies Finger','Sprouts','Palak']];

for(list of vegies){
    for(names of list){
        console.log(names);
    }
}