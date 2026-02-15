const marvel_heroes =["thor","ironman","spiderman"]

const dc_heroes=["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); 
//console.log(marvel_heroes[3][1])

// let allheroes =marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

// spred operator 

// const all_new_heroes=[...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);


// new method
 
const another_array =[1,2,3,[4,5,6],7,[5,7,[5,8]]]

const real_another_array = another_array.flat(Infinity)//nytr tu depth lauu shaktoo asa kiti array ahet techa no

console.log(real_another_array);


// from use karun array make karu shakato 

console.log(Array.isArray("sanket"));
console.log(Array.from("sanket"));


let score1 = 100 ;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1 , score2 , score3)); // THIS METHOD TO USE MULTIPLE VARIABLES IN INCLUDES ONE VARIABLE TO USE ARRAY METHOD OF FUNCATION
