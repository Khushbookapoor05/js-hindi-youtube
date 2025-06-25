const myObject ={
    js : 'javascript',
    cpp : "C++", 
    rb : "ruby",
    swift : "swife by apple"
}

for (const key in myObject) {
    //console.log(key);
    //console.log(myObject[key]);
    console.log(`${key} is shortcut for ${myObject[key]}`);
    
}

const programming =["js", "cpp" , "rb" , "java" , "py"]

for (const key in programming) {
    console.log(`${key} is ${programming[key]}`);  // in this forin loop, we get the keys of the values
     
    }
    
// const map = new Map()        // Map object holds key-value pairs and remembers the original insertion order of the keys.
// map.set('IN', "India")      //  Any value (both objects and primitive values) may be used as either a key or a value.
// map.set('USA' , "United States Of America")       // no duplicate values , we get only all unique values
// map.set('Fr' , "France")                       // do not change the order of iterations 


// for (const key in map) {
//   console.log(key);         // not interable in forin loops
// }