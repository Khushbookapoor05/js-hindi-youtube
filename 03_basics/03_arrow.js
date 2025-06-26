// This: It refers the current context 

const user ={
    username : "hitesh",
    price : 999 ,      
    welcomeMessage: function () {
    console.log(`${this.username} , Welcome to Website`);
    console.log(this);
    
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);  // outside the  function or scope the value of this is :{}

// function chai() {
//     let username ="hitesh"
//     console.log(this.username);     // but inside the function ,this will gives multiple things 
//  }                                   // we cann't excess the value by using this in functions
// chai()

// const chai = function () {
//     let username ="hitesh"
//      console.log(this.username); 
// }
   
/*************Arrow Function****************/

// const chai = ()  => {
//     let username ="hitesh"
//      console.log(this); 
// }

// const addtwo = (num1,num2) => {
//     return num1+num2
// }

/* Implicit Return */
//const addtwo = (num1,num2) => num1 + num2    // this will return {}
    
//const addtwo = (num1,num2) => (num1 + num2)      // this will return {}
 
/* for return the the object */
const addtwo = (num1,num2) => ({username: "hitesh"})     // this will return actual value of object
    console.log((addtwo(3,4)));

//const myArrays  =[2,4,6,8,10]
//myArrays.forEach(function () {})