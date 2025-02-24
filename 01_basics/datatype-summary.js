//Primitive 

// Number , String , Boolean , Undefined , Null , Symbol , BigInt

// Non Primitive

// Objects , Arrays , Functions

  const score =100
  const scoreValue =100.3  // both are in numbers category

  const isLoggedIn = false
  const outsideTemp = null
  let userEmail;
 

  const ID = Symbol('123')
  const anotherID = Symbol('123')

// console.log( ID === anotherID);
const BigNumber = 346528756788n


const heroes = ["shaktiman","nagaraj","doga"]
 let myObj = {
     name : "khushi",
     age : 20,
  }

const myFunction = function(){
    console.log(" Ladli Juu ");
}
//console.log(typeof BigNumber);
//console.log(typeof scoreValue);
console.log(typeof heroes);

//console.log(typeof outsideTemp);
console.log(typeof myFunction); // called as function object
/* #All of the non-primitive data types, there return type comes object.
   #All of the non-primitive data types, there data type is actually called function.
   #But the return of function is special , it is called the object function 
   */