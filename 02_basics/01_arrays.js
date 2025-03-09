//Array

/*
1. JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
2. JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
3. JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
4. JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/ 

const myArr = [0, 1 , 2 , 3 , 4 , 5]
// console.log(myArr);
// const myHeroes = ["superman","perman"]
// const myArr2 = new Array(1, 2 ,3 , 4)
// console.log(myArr2[3]);


// Array Methods

//myArr.push(6)
//myArr.pop()
//console.log(myArr);

//myArr.unshift(9)
//myArr.shift(9)

//console.log(myArr);
//console.log(myArr.includes(9));
//console.log(myArr.indexOf (9));
//console.log(myArr.indexOf(3));
 
const newArr = myArr.join() // join will bind the array and change the type of array into string//
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice , splice
console.log("A" , myArr ); // slice returns a copy of section an array
const myn1 = myArr.slice() // it will takes the starting value but not the ending value that's why result is 1,2
console.log(myn1);
console.log("B" , myArr ); // by using slice, the original array remains same   
const myn2 = myArr.splice(1,3) // it will takes the starting or ending value. Output=1,2,3
console.log(myn2);
console.log("C" , myArr); // by using splice, the original array will be menupulated amd removes the splice section 


