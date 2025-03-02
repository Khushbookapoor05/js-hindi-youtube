 const name ="hitesh"
 const repoCount = 50

 console.log( name + repoCount + " Value"); // this was not a good representation of strings

 console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// /* Declare a string */

 const gameName = new String ('hitesh-hc-com')

// /*if we want to access a key*/

 console.log(gameName[0]);

// /*if we want to access a prototype */

 console.log(gameName.__proto__);

// /*if we want to access a length*/
 
 console.log(gameName.length);

// /*if we want to access a functions or methods which are inside the prototype*/

console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

 /*if we want to access a character */

console.log(gameName.charAt(2)); 

/*if we want to access a index */

console.log(gameName.indexOf('t'));

/*if we want to access a substring */

const newString = gameName.substring( 0,4)
console.log(newString); 

/*if we want to use slice to extends a part of string which should  */


const anotherString = gameName.slice(-8,4)
console.log(anotherString);

/*if we want to trim the space */


const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

/*if we want to replace any item and also asked question */

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20' , '-')) 

console.log(url.includes('hitesh'))

/*if we want to array from a given string */

console.log(gameName.split('-'));














