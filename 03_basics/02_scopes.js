var c = 300 
let a = 100 
                  // outside the brasis or scope is called the global scope and inside the brasis is called the local scope 
// if (true) {
// let a = 10 
// const b = 20 
// var c = 30 
// }
// if (true) {
//     let a = 10 
//     const b = 20 
//      c = 30 
//     }
    if (true) {
        let a = 10 
        const b = 20 
        console.log("INNER:", a);
    
        }

console.log(a);
//console.log(b);
//console.log(c);

/** GLobal Scopes are different in both condition that means for node ,scopes are different and for cor scope, it isalso different **/


function one () {
    const username = "hitesh"

    function two () {
         const website = "youtube"
         console.log(username);
        
     }
    // console.log(website);
     
  two()   
}
one()

if (true) {
    const username= "hitesh"
    if (username === "hitesh") {
        const website =" youtube"
        console.log(username + website);        
    }
    //console.log(website);
    
} 
//console.log(username);


//++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++=//

console.log(addone(5));
function addone (num) {
    return num +1
} 

// FUNCTION EXPRESSION
console.log(addtwo(5));
const addtwo = function (num) {
    return num + 2                     /* hosting */
    
}
//addtwo(5)


//++   In 2015,ES6 comes and gives new features           ++//