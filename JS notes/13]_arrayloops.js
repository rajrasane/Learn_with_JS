let movies = ['avatar','transformers','avengers'];

for(let i = movies.length-1;i>=0;i--){
    console.log(i,movies[i]);
}


// Nested Loops with Nested Arrays

let heros = [['Iron Man','Captain America','Spiderman'],['Aquaman','Batman','Wonderwoman']];
for(let i = 0;i<heros.length;i++){
    console.log(i, heros[i]);
    for(let j = 0;j<heros[i].length;j++){
        console.log(`j=${j} ${heros[i][j]}`);
    }
}