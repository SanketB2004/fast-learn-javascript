// singleton  literals dicreed not make singleleto contructor use to make singleton
// any interview q to ans this singleton and literls 
//Object.create

// object literals  
 const mySum = Symbol("key1") // this is symbole use in object

const jsUser = {
name: "Sanket",
"full name":"sanket bharat bhosale ",
[mySum]:"myKey1", // Symbole
age: 21,
location:"Pune",
email:"sanketbhosale@gmail.com",
isLogged:false,
lastLogin:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email" ]);

// console.log(jsUser.full name);//onle double codes use accsess  and squre bracate use 

// symbole print ya acssess

// console.log(jsUser[mySum]); // Symbole only use in braccate


jsUser.email ="chat@gmail.com"  // change this value in object 

// Object.freeze(jsUser) // this is lock object not change any person


// console.log(jsUser.email);

// console.log(jsUser);



jsUser.greet = function(){
    console.log("hello js user");
    
}

jsUser.greet2 = function(){
    console.log(`Hello js user , ${this.name}`);
    
}

console.log(jsUser.greet());
console.log(jsUser.greet2());




