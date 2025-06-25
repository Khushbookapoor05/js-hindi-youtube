// High Order Array loops
// for of

// ["" , "" , ""]
// [{} , {} , {}]

// const arr = [ 1, 2, 3, 4, 5]

// for (const num of arr) {
//     //console.log(num);
//     }


// const grettings = "Hello world!"
// for (const greet of grettings){
//     console.log(`Each char is :${greet}`);    

// }

const map = new Map()        // Map object holds key-value pairs and remembers the original insertion order of the keys.
map.set('IN', "India")      //  Any value (both objects and primitive values) may be used as either a key or a value.
map.set('USA' , "United States Of America")       // no duplicate values , we get only all unique values
map.set('Fr' , "France")                       // do not change the order of iterations 

// console.log(map);

 for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log( key,':-' , value);     // {in this forof loop , we get directly the values}
 }
// const myObject ={ 
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }

// for (const [key , value] of myObject) {
//     console.log( key,':-' , value);          // this is not iterable

// }