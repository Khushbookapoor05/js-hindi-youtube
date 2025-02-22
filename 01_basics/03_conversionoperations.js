let score="33abc"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)//we declared the datatypes in the capital letter format which is class based
//console.log(typeof valueInNumber);
//console.log(valueInNumber);
/* 1. In case of that type of values (33abc) which is the mixture of no. and letter, and we gonna change the valueInNumber. Hence, we get the NoN (not a number) as a output. ("33" = 33),("33abc" = NaN) 
   2. In case of the type of value is null and we gonna change the valueInNumber. Hence, we get the 0 (zero) as the output.    
   3. In case of the type of value is undefined and we goona change the valueInNumber. Hence, we get the NoN (not a number) as a output. 
   4. In case of the type of value is string and we goona change the valueInNumber. Hence, we get the NoN (not a number) as a output. 
   5. In case of the type of value is boolean and we goona change the valueInNumber. Hence, we get the 1 when true and 0 when false as a output. (true = 1, false = 0)
   */

let isLoggedIn=""

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log( booleanIsLoggedIn );

 1= true ; 0 = false
 "" = false ; "khushi"(string)= true

//let isLoggedIn="khushi"

//let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log( booleanIsLoggedIn );

let someNumber = 33

let stringsomeNumber = String(someNumber)
 //console.log(stringsomeNumber);
//console.log(typeof stringsomeNumber);

//**************************Operations********************************//

let value =3
let negValue =-value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%2);

let str1 ="Meri"
let str2 =" Ladli Juu"
str3 = str1 + str2;
//console.log(str3);


// console.log("1"+2); // string + number =string 
// console.log(1+"2"); // number + string = string 
// console.log("1"+2+2); // string + number + number = string
// console.log(1+2+"2"); /** number + number + string = numbers are add and string is as is it **/

// console.log( (3 + 2) * 5 % 4 );

// console.log(true);
// console.log(+true);
// console.log(+"");

let num1,num2,num3
num1 = num2 = num3 = 2+2; // not use this tye of code

let gameCounter = 100
++gameCounter ;
//console.log(gameCounter );
