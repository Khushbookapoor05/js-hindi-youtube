// Objects:- Objects are declared by two ways :- literals and constructors.

/* Singelton:-

1. If we declare or a create as constructor , then a singelton is an object, it will made the singelton.
It is the only object in its kind.  
2. If we declare or a create as literals , then it will not made the singelton.
*/

// Objects literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Hitesh",
    "full name" : "Hitesh Choudhary",
    [mySym] : "mykey1", // if we want the symbol as a symbol then we use [mySym] instead of mySym which gives the datatype string//
    age : 23,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays :["Monday","Saturday"] 
  }
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS Word");    
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS Word ,${this.name}`);    
}
console.log(JsUser.greetingTwo());


