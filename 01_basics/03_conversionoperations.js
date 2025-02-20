let score="33abc"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)//we declared the datatypes in the capital letter format which is class based
//console.log(typeof valueInNumber);
//console.log(valueInNumber);
/* 1. In case of that type of values (33abc) which is the mixture of no. and letter, and we gonna change the valueInNumber. Hence, we get the NoN (not a number) as a output. ("33" = 33)
   2. In case of the type of value is null and we gonna change the the valueInNumber. Hence, we get the 0 (zero) as the output. ("33abc" = NaN)    
   3. In case of the type of value is undefined and we goona change the valueInNumber. Hence, we get the NoN (not a number) as a output. 
   4. In case of the type of value is string and we goona change the valueInNumber. Hence, we get the NoN (not a number) as a output. 
   5. In cse of the type of value is bullean and we goona change the valueInNumber. Hence, we get the 1 when true and 0 when false as a output. (true = 1, false = 0)
   */

//let isLoggedIn=""

//let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log( booleanIsLoggedIn );

// 1= true ; 0 = false
// "" = false ; "khushi"(string)= true

let isLoggedIn="khushi"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log( booleanIsLoggedIn );

let someNumber = 33

let stringsomeNumber = String(someNumber)
console.log(stringsomeNumber);
console.log(typeof stringsomeNumber);

