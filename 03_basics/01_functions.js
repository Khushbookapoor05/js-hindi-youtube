// Defination of function
function sayMyName() {
console.log("H");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");
}
sayMyName // This is the reference of function 
sayMyName()  // This is the execution of function

// function addTwoNumbers(number1,number2) {  // (Parameters) When we defining the functions and taken the input inside the brasis are the parameters. 
//     console.log(number1 + number2);   
// }
//addTwoNumbers(3,4) // (Arguments) When we call the function and passing the value inside the brasis are the arguments.
//addTwoNumbers(3,"4")
//addTwoNumbers(3,null)
//addTwoNumbers(3,"a")

 function addTwoNumbers(number1 , number2) {
    //  let result = number1 + number2
    //  return result
               // after given then return value we cann't print anything  
     return number1 + number2
 }          
/* We know that we can store the function in a variable */
 const result = addTwoNumbers(3,5)
 //console.log( "Result:", result);

 function loginUserMessage(username) {
    if (username === undefined) {       // we can also right as (!username) which having the same meaning
    console.log("Please enter a username");
    return         
    }
    return `${username} just logged in `    
 }
//console.log(loginUserMessage("hitesh"));
 console.log(loginUserMessage()); // if we don't pass any value in the argument then it result as undefined
   

//  function calculateCartPrice(...num1) {
//     return num1    
//  }
//  console.log(calculateCartPrice(200 , 300 , 400)); // it prints only the first value so to print all the values we are using the rest operator(...)
   
 function calculateCartPrice(val1 , val2 ,...num1) {
    return num1    
 }
 console.log(calculateCartPrice(200 , 300 , 400 , 500));    
 
 const user  = {
    username : "hitesh",
    price: 199
  }

//   function handleObjects(user) {
//     return ` Username is ${user.username} and price is ${user.price}`  
//   }
//  console.log(handleObjects(user));

// function handleObjects(anyobject) {
//     return ` Username is ${anyobject.username} and price is ${anyobject.price}`  
//    }
//  console.log(handleObjects(user));


function handleObjects(user) {
    console.log(` Username is ${user.username} and price is ${user.price}` ); 
      }
handleObjects({
username: "sam",      // we can directly assign the objects
price: 199
})

const myNewArrays =[200 , 400 , 600 , 800 , 1000]

 function returnSecondValue(getArray){
    return getArray[1]
    
 }
 //console.log(returnSecondValue(myNewArrays));
 console.log(returnSecondValue([200 , 400 , 600]));
    
     
    