 // foreach lop is a prototype of an array

const coding = [ "js" , "cpp", "ruby" , "java", "python"]

// coding.forEach( function (val) {
//     console.log(val);
    
// })                               //function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. Performs the specified action for each element in an array.

// using arrow fn as a calbachfn 
// coding.forEach( (item) => {
//     console.log(item);
    
// })

// get your o/p  by refering a function

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

/*/ A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. Performs the specified action for each element in an array./*/

// coding.forEach( (item,index,array)=> {
//     console.log(item,index,array);
// })
  

// allmost the values comes from database is from arrays
const myCoding = [
     {
       languagename: "javascript",
       languagefilename : "js"
    },
    {
        languagename: "java",
       languagefilename : "java"
        
    },
    {
        languagename: "python",
       languagefilename : "py"

    }]

    myCoding.forEach( (item,index,array)=>{
        //console.log(item,index,array);
        // console.log(item.languagename);
        //  console.log(item.languagefilename);
        
    })