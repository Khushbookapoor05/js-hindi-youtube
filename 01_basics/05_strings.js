const name ="hitesh"
const repoCount = 50

console.log( name + repoCount + " Value"); // this was not a good representation of strings

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

/* Declare a string */

const gameName = new String ('hiteshhc')

/*if we want to access a key*/

console.log(gameName[0]);

/*if we want to access a prototype */

console.log(gameName.__proto__);

/*if we want to access a length*/
 
console.log(gameName.length);

/*if we want to access a functions or methods which are inside the prototype*/

console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

/*if we want to access a character */

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring( 0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString );









