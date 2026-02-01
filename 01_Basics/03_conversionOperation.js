let score = "33";
let scoreInNumber = null;
let isLoggedIn = false;
console.log(typeof(score));

let valueInNumber = Number(score); // conversion from string to number

console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
//undefined => NaN

let is = 1;// conversion from number to boolean
let booleanIsLoggedIn = Boolean(is);
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "abc" => true
// "" => false
// null => false
// undefined => false
// NaN => false

let Numberr = 33;// conversion from number to string
console.log(Numberr);

let scoreInString = String(Numberr);
console.log(typeof(scoreInString));

// 33 => "33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"

// ************************* operations *********************** 

let value = 3 
let negValue = -value // unary negation
console.log(negValue); //note the output

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(5%2);
console.log(2**3);
                     // modulus operator

     let str1 = "hello" 
     let str2 = "world" 
     
     let str3 = str1 +   str2 // string concatenation
        console.log(str3);

        console.log("1"+2); // "12"
        console.log(1+"2"); // "12"
        console.log("1"+2+2); // "122" // concatenation happens first 
        console.log(1+2+"2"); // "32" // addition happens first then concatenation
        
console.log(4-7 / 2 + 3 * 6); // operator precedence // not a useful expression just for demo

console.log(+true); // unary plus operator // output 1
console.log(+false); // unary plus operator // output 0

// not use tricky conversions like these in real code 

let num1 = num2 = num3 = 2+2; // chaining assignment operators
console.log(num1, num2, num3);



let point = 10;
++point; // prefix increment // increments point by 1 // 
console.log(point);
point--; // postfix decrement // decrements point by 1
console.log(point);

// completed 