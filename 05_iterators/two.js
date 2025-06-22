// Do-While or While loops
  
// let index = 1
// while (index <= 10) {
//     console.log(`Value of i is: ${index}`);
//     index = index + 2
    
// }

let myArray =[ "flash" , "batman" , "superman"]

let arr = 0
while ( arr < myArray.length) {
    console.log(`Value is : ${myArray[arr]}`);
     arr = arr + 1    
}

let score = 1

do {                                             // Do-While loop : A statement that is executed at least once and re-executed as long as the condition evaluates to true. You can use a block statement to execute multiple statements.
    console.log(`Value is : ${score}`);
    score++    
} while (score <= 10);