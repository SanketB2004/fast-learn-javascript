const user = {

    userName : "Sanket",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`); //this ha scope kadhun variable la bhaher acssess deto
        console.log(this);//current context print
        
    }

}

// user.welcomeMessage()
// user.userName ="sam"
// user.welcomeMessage()

// console.log(this);// this faktt scope madhe print hoil bhaher cureent context ny dhakavat 
// because to bhaher gobal scope madhe ahe 
// browser ke ander global object is window object 


//+++++++++++++++++++++++ Arow function 

// function chai(){
//     let username = "sanket"
//     console.log(this.username);
    
// }//daynamic 

// chai() // not work normal function 


// const chai = () => {

//     let userNamee = "sanket"
//     console.log(this);
    
// } // lexial this




// const addTwo = (num1, num2) => {

// return num1 + num2
// }

// console.log(addTwo(5,2)); // basic arrow function 

// or type

// const addTwo = (num1, num2) =>  num1 + num2 // this is arrow function 
// or type 
// const addTwo = (num1, num2) =>  (num1 + num2) // curly bracet use kela tr return lihayala lagato 

// console.log(addTwo(5,2));


 const addTewo = (num1 , num2) => ({username:"sanket"}) // object sathi parenthises lavayala lagatat 

 console.log(addTewo(5,2));


 