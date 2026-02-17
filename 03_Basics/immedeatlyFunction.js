// Immediately Invoked Function Expression (IIFE)

// (function chai(){
//     console.log(`DB CONNECTEDd`);
    
// })() 

// exucation call only 

// interview madhe sangayacha ki 
//global scope pollition kami karanyasathi asa immedietly function cha use hoto
// all type function saathi use karu shakto jashe arrow function sathi pn

// example

// (() => {
//  console.log(`DB SECOND CONNECTED`);
    
// })(); // use arrow function  // semi ; use this step only

// //6755 RS

// pass // 

( (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
    }
)('Sanket')