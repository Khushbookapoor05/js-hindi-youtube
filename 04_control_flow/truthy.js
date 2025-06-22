//const userEmail = "hr@hitesh.com"
const userEmail = []
 if (userEmail) {
     console.log("got a user Email");
 } else {
         console.log("don't have user Email");
 }

// falsy values

// false, 0 , -0 , BigInt 0n , NaN , "" , null , undefined

// truthy values

// "0" , 'false' , " " (space in string) , [] =[empty array] , {} =[empty object] , function(){} =[empty function]

// How to check an array is empty
  
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// How to check an object is empty

// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0){
//     console.log("Object is empty");
// }

let var1;
//var1 = 5 ?? 10
//var1 = null ?? 10 // complex function , so database that function and give the function back
//var1 = undefined ?? 15
var1 = null ?? 10 ?? 15   // after null or undefined , we will choose the first value for the output
console.log(var1);

//  Terniary operators

// conditions ? true : false

const iceTeaPrice = 100
//iceTeaPrice >= 80 ? console.log(" less than 80 ") : console.log(" more than 80 ")  // hence we know that the iceteaprice is 100 which is >= 80 ,so that condition is true , we print the true condition.  

iceTeaPrice <= 80 ? console.log(" less than 80 ") : console.log(" more than 80 ")   // condition is false