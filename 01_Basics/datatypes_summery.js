//Primitive 

// 7 types : string , bigint , symbole , number , undefiend , null , boolean

const isloginuser = 4558852755n;// last add only n to desided to bigint use here datatype
console.log(typeof(isloginuser));

// javascript is dynamic typed language 

// referance types or non primitive datatypes 

// arrays ,objects ,functions 
 // basics example
const heroes = ["sanket", "atherv"]//array

let obj = {
   name:"sanket ",
   age:22 
} //object

// simple basics funcation example 
// function data types is function 
const myFunc = function(){
    console.log("Hello World");
    
}


// data type serch use a typeof operator 

console.log(typeof(isloginuser));


//*********************  Stack And Heap Memoryes  */

let myYoutubename = "sanketbhosale11575@gmail.com"

let anothername = myYoutubename

anothername = "sanketaurcode"

console.log(anothername);
console.log(myYoutubename);


// Heap Memory 

let userone = {

    name:"sanket",
    upiId:4578,
phoneNo:100 
}


let usertwo = userone 

usertwo.phoneNo = 200 

console.log(userone.phoneNo);
console.log(usertwo.phoneNo);



