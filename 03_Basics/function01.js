//function and parameter 

// function saymyname(){
// console.log("Sanket");
// console.log("Bhosale");


// }

// // saymyname // refrance use in react 

// // saymyname()//exucation 


// // two no add function 

// // function  addTwoNo(num1 , num2) { // parameter 
// //     console.log(num1+num2);
    
// // }
// function  addTwoNo(num1 , num2) { // parameter 
//     // let result = num1 + num2 

//     // return result 

//     // or
//     return num1 + num2

//     console.log("Sanket"); // return ke bad print nahii hota 
    
    
// }
// const result = addTwoNo(5 , 3); // argument 


// // console.log(result);

// function loginUser(username) {
//     if(!username){ // user name nasel tr log print hoil if madhala 
// console.log("Plese Enter User Name");
// return //khali nay yenar mng direct print honar stetament
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUser("Sanket"));

// console.log(loginUser("Sanket"));// undefiend 

// ++++++++++++++++++ Function and Object ++++++++++++++++++ 

//  shoping cart project time use this  

// function calculatedCartPrice(...num1){  // rest operator this not spred operator 

//     return num1
// }

// console.log(calculatedCartPrice(2 , 400 , 55 , 500 , 5000 ));


// same as but use va1 , val2 , ...num1

// function calculatedCartPrice(val1 , val2 , ...num1){  // rest operator this not spred operator 
// console.log(val1); // this is a print val1

//      return num1
//  }

//  console.log(calculatedCartPrice(2 , 400 , 55 , 500 , 5000 ));

//  // this is a next level parameter use 

//  const user = {
//     username : "Sanket",
//     price: 199
//  }
 
//  function handleObject(anyObj){

//     console.log(`user name is ${anyObj.username} and  price is ${anyObj.price}`);
    
//  }

// //  console.log(handleObject(user));

// handleObject({
//     username:"Sam",
//     price:399
// });


// array pass in function +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const mynewarray = [200,400,600]

 function returnseconvalue(getArray) {
    
    return getArray[1]

 }
// console.log(returnseconvalue(mynewarray));
console.log(returnseconvalue([100,200,300,400]));

