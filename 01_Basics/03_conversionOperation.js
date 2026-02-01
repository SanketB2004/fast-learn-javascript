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

let is = 1;
let booleanIsLoggedIn = Boolean(is);
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "abc" => true
// "" => false
// null => false
// undefined => false
// NaN => false

let Numberr = 33;
console.log(Numberr);

let scoreInString = String(Numberr);
console.log(typeof(scoreInString));

// 33 => "33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"