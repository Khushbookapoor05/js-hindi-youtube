// Immediately Invoked Function Expressions
/* 
1. Sometimes which thing (global variables) are declared in function are poluted to the global scope.
2. Immediate excess the function as soon as possible.

 to overcome this problem , we use IIFE.
 /* Because we don't want polution from the global scope that's why we make a new scope and we wants to immediate excess.Because
*/

(function chai() {
    // named IIFE
   console.log(`DB CONNECTED`);    
})() ;  // code ends with (;) While first iife function is not ended then it will not run properly it will gives error.

// (function aurcode() {
//     console.log(`DB CONNECTED TWO`);  
// })()

// (()  => {
//     console.log(`DB CONNECTED TWO`);  
// })()

( (name ) => {
    console.log(`DB CONNECTED TWO ${name}`);    
})("hitesh")

