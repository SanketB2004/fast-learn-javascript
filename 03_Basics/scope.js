// // Global & local Scope 


// // let and const are blog scope element 

// // ex// 

// {
//     let a = 80;
//     const b = 80;
    
// }// blog scope

// let a = 50 ; // global scope
// const b = 40 ;


// // but var is not a blog scope element
// // avoid a var 


// // nested scope 

// function one(){

//     const userName="Sanket"

// function two(){
//     const webside = "Youtube"
//     console.log(userName);
    
// }
// // console.log(webside);

// two()

// }

// one()


///////////////////////interasting /////////////////////
console.log(addone(5));

function addone(num){
return num+1;

}


// console.log(addtwo(2)); // error hoisting check this is malke in variable function
// first la he function acsseess nay hott

const addtwo = function(num){//exprasions function type 
    return num + 2 // asa pn function make karu shakato apan
}

